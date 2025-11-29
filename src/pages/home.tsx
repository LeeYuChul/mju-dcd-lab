import React, { useEffect, useState, useRef } from 'react';
import { fetchMasterStudents, fetchGraduateStudents, fetchProjects, fetchNews, fetchProfessors } from '../api/notion';
import type { MasterStudent, GraduateStudent, Project, News, Professor } from '../types/notion';
import LoadingScreen from './loading';
import NewsList from './news_list';
import { getDataPromise } from '../utils/data';
import { trackPageView } from '../utils/analytics';
import { AnimatePresence, motion } from 'framer-motion';
import Lottie from 'lottie-react';
import scrollDownAnimation from '../assets/animation/ScrollDown.json';
import {
    MissionStatement,
    ImageGallery,
    ActivitiesSection,
    ResearchSection,
    TeamSection,
    ContactSection,
} from '../components/sections';

interface HomeProps {
    initialData?: {
        masterStudents: MasterStudent[];
        graduates: GraduateStudent[];
        projects: Project[];
        news: News[];
        professors: Professor[];
    };
}

// FadeInSection 컴포넌트: 스크롤 시 아래에서 위로 올라오며 나타나는 효과
const FadeInSection = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

const Home: React.FC<HomeProps> = ({ initialData }) => {
    const [masterStudents, setMasterStudents] = useState<MasterStudent[]>(initialData?.masterStudents || []);
    const [graduates, setGraduates] = useState<GraduateStudent[]>(initialData?.graduates || []);
    const [projects, setProjects] = useState<Project[]>(initialData?.projects || []);
    const [news, setNews] = useState<News[]>(initialData?.news || []);
    const [professors, setProfessors] = useState<Professor[]>(initialData?.professors || []);
    const [loading, setLoading] = useState(!initialData);

    // Always show loading screen initially for smooth transition
    const [showLoading, setShowLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const progressRef = useRef(0);
    const [showNavbar, setShowNavbar] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [showNewsList, setShowNewsList] = useState(false);

    // Remove the CSS loading screen when React takes over
    useEffect(() => {
        const initialLoadingEl = document.getElementById('initial-loading');
        if (initialLoadingEl) {
            initialLoadingEl.classList.add('hidden');
            setTimeout(() => {
                initialLoadingEl.remove();
            }, 500);
        }
    }, []);

    useEffect(() => {
        setIsMounted(true);
        const handleScroll = () => {
            setShowNavbar(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!showLoading) {
            document.title = "Core Loop Lab - Home";
            trackPageView("Core Loop Lab - Home", "/");
        }
    }, [showLoading]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        // Progress animation logic
        let animationFrame: number;
        let isDataReady = !!initialData;

        const animate = () => {
            if (isDataReady) {
                // Data is ready, accelerate to 100%
                const next = Math.min(100, progressRef.current + 3);
                progressRef.current = next;
                setProgress(next);
            } else {
                // Data not ready - slower progress
                const next = Math.min(90, progressRef.current + 0.5);
                progressRef.current = next;
                setProgress(next);
            }

            if (progressRef.current < 100) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                // Finished - small delay before hiding loading screen
                setTimeout(() => setShowLoading(false), 300);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        // If no initialData, fetch on client side
        if (!initialData) {
            const promise = getDataPromise();
            if (promise) {
                promise.then((data: any) => {
                    if (data) {
                        setMasterStudents(data.masterStudents || []);
                        setGraduates(data.graduates || []);
                        setProjects(data.projects || []);
                        setNews(data.news || []);
                        setProfessors(data.professors || []);
                        setLoading(false);
                        isDataReady = true;
                    } else {
                        performFallbackFetch();
                    }
                }).catch(() => {
                    performFallbackFetch();
                });
            } else {
                performFallbackFetch();
            }
        }

        function performFallbackFetch() {
            const loadData = async () => {
                try {
                    const [students, grads, projs, newsList, profs] = await Promise.all([
                        fetchMasterStudents(),
                        fetchGraduateStudents(),
                        fetchProjects(),
                        fetchNews(),
                        fetchProfessors()
                    ]);
                    setMasterStudents(students);
                    setGraduates(grads);
                    setProjects(projs);
                    setNews(newsList);
                    setProfessors(profs);
                    isDataReady = true;
                } catch (error) {
                    console.error('Failed to load data:', error);
                    isDataReady = true;
                } finally {
                    setLoading(false);
                }
            };
            loadData();
        }

        return () => cancelAnimationFrame(animationFrame);
    }, [initialData]);

    // NewsList 페이지 표시
    if (showNewsList) {
        return <NewsList news={news} onBack={() => setShowNewsList(false)} />;
    }

    return (
        <div className="min-h-screen bg-background">
            <AnimatePresence>
                {showLoading && (
                    <LoadingScreen progress={progress} key="loading" />
                )}
            </AnimatePresence>

            {/* Scroll-triggered Navigation Bar */}
            <AnimatePresence>
                {showNavbar && (
                    <motion.nav
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border h-16 flex items-center justify-center"
                    >
                        <div className="container mx-auto px-4 flex items-center justify-between">
                            <div 
                                className="font-bold text-xl cursor-pointer text-foreground" 
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                Core Loop Lab
                            </div>
                            <div className="flex space-x-6 text-sm font-medium">
                                <button 
                                    onClick={() => scrollToSection('activities')} 
                                    className="text-foreground/70 hover:text-foreground transition-colors"
                                >
                                    Activities
                                </button>
                                <button 
                                    onClick={() => scrollToSection('projects')} 
                                    className="text-foreground/70 hover:text-foreground transition-colors"
                                >
                                    Research
                                </button>
                                <button 
                                    onClick={() => scrollToSection('members')} 
                                    className="text-foreground/70 hover:text-foreground transition-colors"
                                >
                                    Team
                                </button>
                                <button 
                                    onClick={() => scrollToSection('contact')} 
                                    className="text-foreground/70 hover:text-foreground transition-colors"
                                >
                                    Contact
                                </button>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            <main>
                {/* Hero Section with Header */}
                <section className="border-b border-border bg-background">
                    <div className="container mx-auto px-4 py-12 md:py-20">
                        <div className="max-w-4xl">
                            {showLoading ? (
                                <div className="h-24" />
                            ) : (
                                <motion.h1
                                    layoutId="dcd-lab-title"
                                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4"
                                    transition={{ duration: 0.8, ease: "circOut" }}
                                    layout
                                >
                                    Core-Loop Lab
                                </motion.h1>
                            )}
                            <p className="text-lg md:text-xl text-muted-foreground font-medium">
                                From Core Mechanics to Real Impact
                            </p>
                        </div>
                    </div>
                </section>

                {/* Scroll Down Animation */}
                <div className="flex justify-center py-12 border-b border-border">
                    <div className="w-[72px] h-[120px]">
                        {isMounted && (
                            <Lottie 
                                animationData={scrollDownAnimation} 
                                loop={true} 
                                className="w-full h-full dark:invert" 
                            />
                        )}
                    </div>
                </div>

                {/* Mission Statement */}
                <FadeInSection>
                    <MissionStatement />
                </FadeInSection>

                {/* Image Gallery */}
                <FadeInSection>
                    <ImageGallery news={news} />
                </FadeInSection>

                {/* Activities Section */}
                <FadeInSection>
                    <ActivitiesSection news={news} onViewAll={() => setShowNewsList(true)} />
                </FadeInSection>

                {/* Research Section */}
                <FadeInSection>
                    <ResearchSection projects={projects} />
                </FadeInSection>

                {/* Team Section */}
                <FadeInSection>
                    <TeamSection 
                        masterStudents={masterStudents} 
                        graduates={graduates}
                        professors={professors}
                    />
                </FadeInSection>

                {/* Contact Section */}
                <FadeInSection>
                    <ContactSection />
                </FadeInSection>
            </main>

            {/* Footer */}
            <footer className="bg-foreground py-6">
                <div className="container mx-auto px-4">
                    <p className="text-center text-xs text-background/60">
                        Copyright © 2025 Myongji University Core Loop Laboratory
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
