import React from 'react';

const Home: React.FC = () => {
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
                    <p>DCD 랩은 '디자인만 하고 싶은 사람이 아닌, '사람에 대한 관심이 많은 사람들'로 구성되어 있습니다. 보기 좋게 만들고, 사용하기 편리하게 만드는 것을 디자인이라 생각할 수 있지만, 정교하게 설계된 디자인은 기술과 사람을 바람직하게 연결해 주며 궁극적으로 사용자의 행동을 긍정적으로 유도하기도 합니다. DCD 랩은 사람에 대한 이해와 열정을 바탕으로 지속적으로 연구하고자 합니다.</p>
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
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center md:items-start">
                            <img alt="Portrait of Professor Shin Hye-Ryeon" className="w-48 h-48 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC_w6i2BlGgFZUb7DJrMqWcTBcgtqGoke05AoCkgfv_nbyvgAZhev0HVsRyDVU9q5QfTJwzxhv579SzUX1RiXh6gvqy3D9x-Ib5N2ybkPotW5S1KsF38Xoq7_xMSt31GEekjNTgpAeAsRJY5pCgVOBPrUWc8G5h303RKxiPFxcp2j5HPiZJsQFuaexYeNypj_sCzF430GDnUK8DICSZtWZEhi9WUJZWmG6dO66UqZdv7mMkPB4JiENYwDx5KZom5YweY6Vzeqk18" />
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
                <section className="mb-32">
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold mb-8">석사과정 연구원</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
                            <div className="flex items-center space-x-4">
                                <img alt="Portrait of a lab member" className="w-16 h-16 rounded-full object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGv4utmqT8uFFVQKsBzlog0NQQUFPCWT5eYjfI-NdzhTVMU39Rjn8qOCBTwlijlsO3T7IGW9Ds2JmM-Pq5ors_7SF6H5nP65laL_KU3FcHJ_aNyGPc1bnUOJGwLAjjXxK-JtUyctQbduylonR3V7GxLU7YXb4sizLxRxesyrjtVlO_OQiFWyDWp3hUGgy1XovF-V89MdENeezB89ho2l_U04U6Y8WAdcjvoG63vRbf0evSOXfvD2j8oPdJfAOe_9XcdAOxzi0-IDE" />
                                <div>
                                    <p className="font-bold">조보민</p>
                                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">UX/UI디자인, 인터랙션디자인, 사용자 행동변화 디자인</p>
                                    <a className="text-xs underline break-all" href="mailto:bloomytime@naver.com">bloomytime@naver.com</a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <img alt="Portrait of a lab member" className="w-16 h-16 rounded-full object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmuOEb51nVyqau3pN0Dl1nU4BiLXBNf--HPtvNDiVr-Vzgcje5PYNdIOq8bNR5zMX6AjnbXwown2q11rWtIJhOijEVrguLleNEBP-M5GoPtQrxtSbFcs5DO2RkoeOfff_Q-N0T3wFJOmhJViFXGimcHuln23v_4fQXSNsjXGvBuwfOGFDUcEXlONaU43SK_TQ7LlLSbMbCgt2lueerkDqiVCiEYSow91HH3lQpkpUpkHsXlWpj0aePQ8OibH9AZjGDhvoIm0FN8FE" />
                                <div>
                                    <p className="font-bold">임은수</p>
                                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">UX/UI디자인, 인공지능 디자인, AR/VR디자인</p>
                                    <a className="text-xs underline break-all" href="mailto:les0807@naver.com">les0807@naver.com</a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <img alt="Portrait of a lab member" className="w-16 h-16 rounded-full object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG_fXIjMaBljnaD52gK8eSc50ApSqk3QmopquOHbbz44_7Nwyfsrac6xp3wWosFh0mZnJjAwaZofexFXMf9-xzzsyq1zv6b-8CU9NQY2q8TCfNQcmv-Uw7w_hxw6Ld5a7X0Bd8wrEpGBuCDpZdrQnNt5GAv1MWzL5pj1hDyAtZPiZb2Wni2tUd8oQvqWz-Xaw289YB-fa2COQ40Z1T7jZO0GjzWNUApfmLMQqXbcg4xCwAH0zjk1cwXkrJsGQkDvo24TqS2qveaF8" />
                                <div>
                                    <p className="font-bold">김민휘</p>
                                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">UX/UI디자인, 인공지능디자인, 사용자경험디자인</p>
                                    <a className="text-xs underline break-all" href="mailto:alsgml0139@naver.com">alsgml0139@naver.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mb-32">
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold mb-8">졸업생</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
                            <div className="flex items-center space-x-4">
                                <img alt="Portrait of a lab member" className="w-16 h-16 rounded-full object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGv4utmqT8uFFVQKsBzlog0NQQUFPCWT5eYjfI-NdzhTVMU39Rjn8qOCBTwlijlsO3T7IGW9Ds2JmM-Pq5ors_7SF6H5nP65laL_KU3FcHJ_aNyGPc1bnUOJGwLAjjXxK-JtUyctQbduylonR3V7GxLU7YXb4sizLxRxesyrjtVlO_OQiFWyDWp3hUGgy1XovF-V89MdENeezB89ho2l_U04U6Y8WAdcjvoG63vRbf0evSOXfvD2j8oPdJfAOe_9XcdAOxzi0-IDE" />
                                <div>
                                    <p className="font-bold">조보민</p>
                                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">UX/UI디자인, 인터랙션디자인, 사용자 행동변화 디자인</p>
                                    <a className="text-xs underline break-all" href="mailto:bloomytime@naver.com">bloomytime@naver.com</a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <img alt="Portrait of a lab member" className="w-16 h-16 rounded-full object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmuOEb51nVyqau3pN0Dl1nU4BiLXBNf--HPtvNDiVr-Vzgcje5PYNdIOq8bNR5zMX6AjnbXwown2q11rWtIJhOijEVrguLleNEBP-M5GoPtQrxtSbFcs5DO2RkoeOfff_Q-N0T3wFJOmhJViFXGimcHuln23v_4fQXSNsjXGvBuwfOGFDUcEXlONaU43SK_TQ7LlLSbMbCgt2lueerkDqiVCiEYSow91HH3lQpkpUpkHsXlWpj0aePQ8OibH9AZjGDhvoIm0FN8FE" />
                                <div>
                                    <p className="font-bold">임은수</p>
                                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">UX/UI디자인, 인공지능 디자인, AR/VR디자인</p>
                                    <a className="text-xs underline break-all" href="mailto:les0807@naver.com">les0807@naver.com</a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <img alt="Portrait of a lab member" className="w-16 h-16 rounded-full object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG_fXIjMaBljnaD52gK8eSc50ApSqk3QmopquOHbbz44_7Nwyfsrac6xp3wWosFh0mZnJjAwaZofexFXMf9-xzzsyq1zv6b-8CU9NQY2q8TCfNQcmv-Uw7w_hxw6Ld5a7X0Bd8wrEpGBuCDpZdrQnNt5GAv1MWzL5pj1hDyAtZPiZb2Wni2tUd8oQvqWz-Xaw289YB-fa2COQ40Z1T7jZO0GjzWNUApfmLMQqXbcg4xCwAH0zjk1cwXkrJsGQkDvo24TqS2qveaF8" />
                                <div>
                                    <p className="font-bold">김민휘</p>
                                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">UX/UI디자인, 인공지능디자인, 사용자경험디자인</p>
                                    <a className="text-xs underline break-all" href="mailto:alsgml0139@naver.com">alsgml0139@naver.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mb-32">
                    <h2 className="text-2xl font-bold mb-8">저널 Journal Articles (최근)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        <div className="border-t border-border-light dark:border-border-dark pt-4">
                            <a className="font-bold underline" href="#">AI 챗봇 페르소나 유형이 사용자 경험에 미치는 영향 (2025)</a>
                            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">한국디자인트렌드학회</p>
                            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">이혜인, 윤재영</p>
                        </div>
                        <div className="border-t border-border-light dark:border-border-dark pt-4">
                            <a className="font-bold underline" href="#">유튜브 유료광고 표시에 대한 인지가 사용자 경험에 미치는 영향 - 20, 30대 여성 사용자를 중심으로(2024)</a>
                            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">한국디자인트렌드학회</p>
                            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">이슬기, 윤재영, 나재휘, 신영미, 이은진</p>
                        </div>
                        <div className="border-t border-border-light dark:border-border-dark pt-4">
                            <a className="font-bold underline" href="#">불편한 디지털치료기기(DTx)의 초기 사용자 경험 개선에 대한 연구 (2024)</a>
                            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">한국디자인문화학회</p>
                            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">김혜수, 장순규, 윤재영</p>
                        </div>
                        <div className="border-t border-border-light dark:border-border-dark pt-4">
                            <a className="font-bold underline" href="#">사회초년생의 전세사기 예방을 위한 모바일 서비스 제안 (2024)</a>
                            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">한국디자인리서치학회</p>
                            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">김민휘, 정유진, 조계홍, 안보영, 박지원, 윤재영</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button className="flex items-center space-x-1 font-medium text-sm hover:underline">
                            <span className="material-symbols-outlined text-base">add</span>
                            <span>이전 저널 논문 더보기</span>
                        </button>
                    </div>
                </section>
                <section className="mb-32">
                    <h2 className="text-2xl font-bold mb-8">디자인어워드 Design Awards (최근)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        <div className="flex items-start space-x-4">
                            <img alt="Award image" className="w-24 h-16 object-cover bg-gray-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJRGc5Wmf-GBuU1q7-fgFBr5IHJ42EgLsrfFpO4OKDxq_OYASe1vvEf9e_Iz6mINnWrVa6Npd8TLTXo0JPzCUqKbh_005DvcTdxMsBDBVRA0QMxa-FV5oR0ojJVBTABzoMGpt65CIYcuvHQMVPS3WiLsE6-2bHa79KezNRZEaWphwvm9PuNv_8ByozA87BgggLlZ3ehFbWI9efWyvnXUJ1Qq_7dEuMbPiL5-jMFdep9TiheLlhIrEWstA3TUPSOASlYWppr3-X9R4" />
                            <div>
                                <a className="font-bold underline" href="#">AI 챗봇의 애정 표현에 대한 사용자 경험 연구 (2025)</a>
                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">한국HCI학회 학술대회 우수논문상</p>
                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">이채윤, 박지원, 소유진, 성진우, 정유진, 윤재영</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <img alt="Award image" className="w-24 h-16 object-cover bg-gray-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdscFrBt8IJueZoVeF-80Xrc8UpcPwQZa9zOjLE3Tl_NJfnFbhij2Jh_bODNYb8CM6IkBvvIUhJgVRtn3kQvftxuA2nAsddZJkR4BO9axJ5dewuDEl9tIUwA1198FKGGlzq-XedrHjSI921_TVHnLmP3zgRDBWZO-Skldgb48JXhwjBH6dlkOOFki25BE1vZ_CciiwBJpyZmWKI7JV3aVJo0P__1eQRKssN22COfQDgUz2Xlw1reKnbggqAcwz70jOF0zAUJn6bH4" />
                            <div>
                                <a className="font-bold underline" href="#">다크패턴 디자인인 것을 감지하고 방향성을 제시하는 플러그인 (2024)</a>
                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">대학생디자인학술대회(DSUS)장려상</p>
                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">백송주, 황수빈, 안소은, 정나영, 윤가빈</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <img alt="Award image" className="w-24 h-16 object-cover bg-gray-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjmhzPjC1UQ2y-4i-dINOV-4IsGhWEGNysazNrokK5noeCaZebERjm2aVFcxeTyu2iOnHpYIKy5xeUbHIE9DMX4YhjepELXMAP-VJ5kEiByHfnYcjFSZ1_z2o-U200783H9zc4A8FdQxDLsr_Sr59zaSFDRjdsgwnszHZYyilMTHVaCeHM-mP1jwoKtHl96BMF3LnWMofbwLAJSK-rTyqGytcvC5cbpDp__C7YAzTFnpf4l8XmAb91MFgQJ4KDexAACKzheGh12A" />
                            <div>
                                <a className="font-bold underline" href="#">인간 중심 너비의 디자인 (2024)</a>
                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">한국디자인학회 국제초대전 대상</p>
                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">이승규</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <img alt="Award image" className="w-24 h-16 object-cover bg-gray-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARQhHlIALN8jPBYW5AnkKTgtYMHt2f71hMSkgThB9bKKTYNCIdj2cScEIYwHjrGvSlXVP4_m6DZBbJ7apx1Ij3zw9VdIKd6i_OoEAYTxvWRG3bqd2N_3zBeU992xuK1JIpoFwCvnzukTIr90E0fiDfWiVxZ6pQqJ5AgvJOKUJFZ4gaBSxNRjkCAC70XSYzarc7tQYyg0nmptRG6fQ8XCHW_T-Z4T-PsjpeqTdNbx1-JX4U3KZzF_7dn3uiCSoESQFT7AOHtymxJH4" />
                            <div>
                                <a className="font-bold underline" href="#">구독 해지 과정의 복잡성 정도에 따른 사용자 경험 연구 (2023)</a>
                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Archives of Design Research 최우수논문상(1등)</p>
                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">조보민, 오선영, 이지영, 김은지, 윤재영</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button className="flex items-center space-x-1 font-medium text-sm hover:underline">
                            <span className="material-symbols-outlined text-base">add</span>
                            <span>이전 디자인 어워드 더보기</span>
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
