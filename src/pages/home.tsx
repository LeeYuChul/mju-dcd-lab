import React, { useEffect, useState } from 'react';
import { fetchMasterStudents, fetchGraduateStudents, fetchProjects, fetchNews } from '../api/notion';
import type { MasterStudent, GraduateStudent, Project, News } from '../types/notion';
import profImage from '../assets/image/prof.jpeg';

interface HomeProps {
    initialData?: {
        masterStudents: MasterStudent[];
        graduates: GraduateStudent[];
        projects: Project[];
        news: News[];
    };
}

const Home: React.FC<HomeProps> = ({ initialData }) => {
    const [masterStudents, setMasterStudents] = useState<MasterStudent[]>(initialData?.masterStudents || []);
    const [graduates, setGraduates] = useState<GraduateStudent[]>(initialData?.graduates || []);
    const [projects, setProjects] = useState<Project[]>(initialData?.projects || []);
    const [news, setNews] = useState<News[]>(initialData?.news || []);
    const [loading, setLoading] = useState(!initialData);

    useEffect(() => {
        if (initialData) return;

        const loadData = async () => {
            try {
                const [students, grads, projs, newsList] = await Promise.all([
                    fetchMasterStudents(),
                    fetchGraduateStudents(),
                    fetchProjects(),
                    fetchNews()
                ]);
                setMasterStudents(students);
                setGraduates(grads);
                setProjects(projs);
                setNews(newsList);
            } catch (error) {
                console.error('Failed to load data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [initialData]);

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <header className="text-right text-sm text-text-secondary-light dark:text-text-secondary-dark space-y-2 mb-20">
                <p>명지대학교 인공지능·소프트웨어 융합대학<br />디지털콘텐츠디자인학과 DCD Lab</p>
                <p>서울특별시 서대문구 거북골로 34, 명지대학교 인문캠퍼스 종합관 S1803</p>
            </header>
            <main>
                <section className="mb-24">
                    <h1 className="text-8xl font-bold text-primary dark:text-white">DCD Lab</h1>
                    <p className="text-4xl mt-2 text-text-light dark:text-text-dark">Design Convergence and Digital media</p>
                </section>
                <div className="flex justify-center mb-24">
                    <div className="w-6 h-10 border-2 border-text-secondary-light dark:border-text-secondary-dark rounded-full relative">
                        <div className="w-1 h-2 bg-text-secondary-light dark:bg-text-secondary-dark rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce"></div>
                    </div>
                </div>
                <section className="max-w-4xl mx-auto mb-24 text-base leading-relaxed space-y-6">
                    <p>명지대학교 DCD 랩은 Design Convergence and Digital media의 약자로 '사람들에게 좋은 경험을 제공할 수 있도록 깊이 연구하여 좋은 디자인을 만들겠다' 라는 바램과 가치관이 담겨있습니다. DCD 랩에서 집중하고 있는 연구분야로는 면밀한 사용자 조사를 기반으로 한 UX·UI 연구, 사용자의 행동을 유도하고 기만하는 Persuasive 디자인 연구, 수집된 데이터를 시각화하여 인사이트를 제공하는 Data Visualization 연구, 인공지능 솔루션을 효과적으로 사용할 수 있도록 도와주는 AI Interaction Design 연구 등으로 구성되어 있습니다.</p>
                </section>
                                <section className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center md:items-start">
                            <img alt="Portrait of Professor Shin Hye-Ryeon" className="w-48 h-48 rounded-full object-cover select-none" src={profImage} draggable="false" />
                            <h2 className="text-lg font-bold mt-4">신혜련 교수 (부교수)</h2>
                            <a className="text-sm underline" href="mailto:worksmju@mju.ac.kr">worksmju@mju.ac.kr</a>
                        </div>
                        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <ul className="space-y-1 text-sm">
                                    <li>명지대학교 인공지능·소프트웨어 융합대학<br />디지털콘텐츠디자인학과 부교수</li>
                                    <li className="pt-4">Carnegie Mellon University, Computational Design 박사</li>
                                </ul>
                                <h3 className="font-bold mb-2 mt-6">수상</h3>
                                <ul className="space-y-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                    <li>한국HCI학회 우수논문상(2025, 2019)</li>
                                    <li>Archives of Design Research 최우수논문상(2023)</li>
                                    <li>대한민국학술원 우수학술도서 선정(2023)</li>
                                    <li>Red Dot Design Award (2023, 2021)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">대표 프로젝트/논문</h3>
                                <ul className="space-y-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                    <li>삼성전자 미래 홈 인비저닝 프로젝트 (2025)</li>
                                    <li>삼성전자 Intelligent AR 프로젝트 (2024)</li>
                                    <li>질병청 당뇨예측모형 온라인 계산기 개발 (2024)</li>
                                    <li>국회 홈페이지 UXUI 가이드라인 디자인 프로젝트 (2023)</li>
                                    <li>네이버 차세대 검색/AR 디자인 프로젝트(2022)</li>
                                    <li>한국연구재단 중견연구자 지원사업 (2021 - 2024)</li>
                                    <li>카카오 오픈 UI/UX 디자인 프로젝트 (2017 - 2018)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-32">
                    <div>
                        <h3 className="text-lg font-bold">UX·UI·인터랙션 디자인</h3>
                        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">User Experience·Interface·Interaction Design</p>
                        <p className="mt-4 text-sm leading-6">사용자가 겪고 있는 문제를 이해하고, 좋은 경험(UX)을 제공하기 위해 효과적인 인터페이스(UI)와 인터랙션을 디자인 한다. 면밀한 사용자 조사를 바탕으로한 디자인 산학과제를 진행 중에 있다.</p>
                        <ul className="mt-4 space-y-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                            <li>삼성전자 Intelligent AR 프로젝트 (2024)</li>
                            <li>네이버 검색서비스 경험 개선 프로젝트 (2021)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">사용자 행동 유도·기만하는 디자인</h3>
                        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">Persuasive·Deceptive·Dark Pattern Design</p>
                        <p className="mt-4 text-sm leading-6">사용자가 적절한 방향으로 행동변화를 할 수 있도록 디자인한다. 또한 사용자를 현혹하고 행동을 유인하는 사용자 기만 디자인도 함께 연구 중에 있다.</p>
                        <ul className="mt-4 space-y-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                            <li>디자인 딜레마 : 당신의 행복과 소비는 어떻게 운명히 설계되는가 (2024)</li>
                            <li>디자인 트랩 : 당신을 속이고, 유혹하고, 중독시키는 디자인의 비밀 (2022)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">인공지능·인터랙션 디자인</h3>
                        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">Artificial Intelligence·Interaction Design</p>
                        <p className="mt-4 text-sm leading-6">인공지능 솔루션을 사용자가 올바르고 효과적으로 활용할 수 있도록 디자인한다. AI의 사용자의 커뮤니케이션과 인터랙션이 문제 없이 진행될 수 있도록 디자인하고 연구한다.</p>
                        <ul className="mt-4 space-y-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                            <li>삼성전자 미래 홈 인비저닝 프로젝트 (2025)</li>
                            <li>네이버 차세대 검색/AR 디자인 프로젝트(2022)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">데이터 시각화·정보 디자인</h3>
                        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">Data Visualization·Informatic Design</p>
                        <p className="mt-4 text-sm leading-6">사용자, 사용자 환경, 또는 특정주제에 대한 데이터를 수집, 분석, 시각화 하여 사용자에게 새로운 인사이트를 제공한다. 복잡한 정보를 빠르고 직관적 이해가 가능하도록 디자인 한다.</p>
                        <ul className="mt-4 space-y-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                            <li>질병청 당뇨예측모형 온라인 계산기 개발 (2024)</li>
                            <li>통일부 DMZ 지도 시각화 프로젝트 (2019-2020)</li>
                        </ul>
                    </div>
                </section>
                <section className="mb-32">
                    <div className="mb-0">
                        <h2 className="text-2xl font-bold mb-8">프로젝트</h2>
                        {loading ? (
                            <div className="text-center py-10">
                                <p className="text-text-secondary-light dark:text-text-secondary-dark">로딩 중...</p>
                            </div>
                        ) : projects.length === 0 ? (
                            <div className="text-center py-10">
                                <p className="text-text-secondary-light dark:text-text-secondary-dark">등록된 프로젝트가 없습니다.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                                {projects.map((project, index) => (
                                    <div 
                                        key={project.id} 
                                        className={`h-[400px] relative overflow-hidden group ${
                                            projects.length % 2 !== 0 && index === projects.length - 1 ? 'md:col-span-2' : ''
                                        }`}
                                        style={{ backgroundColor: project.backgroundColor.startsWith('#') ? project.backgroundColor : `#${project.backgroundColor}` }}
                                    >
                                        <div className="absolute inset-[30px] flex items-center justify-center transition-transform duration-300 group-hover:scale-[0.8]">
                                            <img 
                                                src={project.image} 
                                                alt={project.title} 
                                                className="max-w-full max-h-full object-contain select-none"
                                                draggable="false"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                            <p className="text-lg">{project.company}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
                <section className="mb-32">
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold mb-8">석사과정 연구원</h2>
                        {loading ? (
                            <div className="text-center py-10">
                                <p className="text-text-secondary-light dark:text-text-secondary-dark">로딩 중...</p>
                            </div>
                        ) : masterStudents.length === 0 ? (
                            <div className="text-center py-10">
                                <p className="text-text-secondary-light dark:text-text-secondary-dark">등록된 연구원이 없습니다.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                                {masterStudents.map((student, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <img
                                            alt={`Portrait of ${student.name}`}
                                            className="w-16 h-16 rounded-full object-cover flex-shrink-0 select-none"
                                            src={student.photo || 'https://via.placeholder.com/64'}
                                            draggable="false"
                                        />
                                        <div>
                                            <p className="font-bold">{student.name}</p>
                                            <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark line-clamp-1 whitespace-pre-wrap">{student.researchField}</p>
                                            <a className="text-xs underline break-all" href={`mailto:${student.email}`}>{student.email}</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
                <section className="mb-32">
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold mb-8">졸업생</h2>
                        {loading ? (
                            <div className="text-center py-10">
                                <p className="text-text-secondary-light dark:text-text-secondary-dark">로딩 중...</p>
                            </div>
                        ) : graduates.length === 0 ? (
                            <div className="text-center py-10">
                                <p className="text-text-secondary-light dark:text-text-secondary-dark">등록된 졸업생이 없습니다.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                                {graduates.map((student, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <img
                                            alt={`Portrait of ${student.name}`}
                                            className="w-16 h-16 rounded-full object-cover flex-shrink-0 select-none"
                                            src={student.photo || 'https://via.placeholder.com/64'}
                                            draggable="false"
                                        />
                                        <div>
                                            <p className="font-bold">{student.name}</p>
                                            <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark line-clamp-1 whitespace-pre-wrap">{student.researchField}</p>
                                            <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">{student.company}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
                <section className="mb-32">
                    <h2 className="text-2xl font-bold mb-8">DCD Lab News</h2>
                    {loading ? (
                        <div className="text-center py-10">
                            <p className="text-text-secondary-light dark:text-text-secondary-dark">로딩 중...</p>
                        </div>
                    ) : news.length === 0 ? (
                        <div className="text-center py-10">
                            <p className="text-text-secondary-light dark:text-text-secondary-dark">등록된 소식이 없습니다.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {news.map((item) => (
                                <div key={item.id} className="flex items-start space-x-4">
                                    {item.image && (
                                        <img 
                                            alt="News thumbnail" 
                                            className="w-24 h-16 object-cover bg-gray-200 flex-shrink-0 select-none" 
                                            src={item.image} 
                                            draggable="false"
                                        />
                                    )}
                                    <div>
                                        <a 
                                            className="font-bold underline block mb-1" 
                                            href={item.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            {item.title}
                                        </a>
                                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-1 line-clamp-1 whitespace-pre-wrap">
                                            {item.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 text-xs text-text-secondary-light dark:text-text-secondary-dark">
                                            <span>{item.date}</span>
                                            {item.tags.map(tag => (
                                                <span key={tag} className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="mt-8">
                        <button className="flex items-center space-x-1 font-medium text-sm hover:underline">
                            <span className="material-symbols-outlined text-base">add</span>
                            <span>이전 소식 더보기</span>
                        </button>
                    </div>
                </section>
                <section className="text-center mb-16">
                    <a className="inline-flex items-center space-x-2 text-lg font-medium group" href="#">
                        <span>DCD Lab 소식 보러 가기</span>
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
                </section>
            </main>
            <footer className="bg-primary dark:bg-black py-6">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-xs text-gray-400">Copyright © 2025 Myongji University DCD laboratory</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
