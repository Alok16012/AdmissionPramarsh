import React from 'react';
import { useParams } from 'react-router-dom';
import { courseData } from '../data/courses';
import './CourseDetail.css';

const CourseDetail = () => {
    const { category, type } = useParams(); // type will be 'study-india' or 'study-abroad'
    const data = courseData[category.toLowerCase()];

    if (!data) {
        return (
            <div className="container py-5 mt-5 text-center">
                <h2>Course Not Found</h2>
                <p>Sorry, we don't have information for this course yet.</p>
            </div>
        );
    }

    const locationLabel = type === 'study-india' ? 'in India' : 'Abroad';

    return (
        <div className="course-detail-page">
            <header className="course-hero">
                <div className="container">
                    <h1>{data.title} {locationLabel}</h1>
                    <p className="subtitle">{data.subtitle}</p>
                </div>
            </header>

            <section className="course-content py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="content-card mb-4">
                                <h3 className="section-title">Overview</h3>
                                <p className="description">{data.description}</p>
                            </div>

                            <div className="content-card mb-4">
                                <h3 className="section-title">Eligibility Criteria</h3>
                                <div className="table-responsive">
                                    <table className="table custom-table">
                                        <thead>
                                            <tr>
                                                <th>Criterion</th>
                                                <th>Requirement</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.eligibility.map((item, idx) => (
                                                <tr key={idx}>
                                                    <td><strong>{item.criterion}</strong></td>
                                                    <td>{item.requirement}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="content-card mb-4">
                                <h3 className="section-title">Available Branches</h3>
                                <div className="branch-grid">
                                    {data.branches.map((branch, idx) => (
                                        <div key={idx} className="branch-item">
                                            <span className="branch-dot"></span>
                                            {branch}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="content-card mb-4">
                                <h3 className="section-title">Popular Courses</h3>
                                <div className="tag-container">
                                    {data.popularCourses.map((course, idx) => (
                                        <span key={idx} className="course-tag">{course}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="sidebar-card mb-4">
                                <h3 className="section-title">Top Colleges</h3>
                                <div className="table-responsive">
                                    <table className="table table-sm college-table">
                                        <thead>
                                            <tr>
                                                <th>College Name</th>
                                                <th>Location</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.topColleges.map((college, idx) => (
                                                <tr key={idx}>
                                                    <td>{college.name}</td>
                                                    <td><span className="location-badge">{college.location}</span></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="sidebar-card contact-box">
                                <h3>Need Guidance?</h3>
                                <p>Talk to our expert counselors for free.</p>
                                <a href="tel:8809888333" className="btn btn-primary w-100">Call Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CourseDetail;
