// src/components/FooterProjects.jsx

/* footer for project details page */
function FooterProjects({ currentSlug }) {
    /* TEMPORARY data for setting up footer functionality */
    const tempProject = [
        {
            slug: "test-project-1",
            title: "Test Project 1"
        },
        {
            slug: "test-project-2",
            title: "Test Project 2"
        }
    ]

    /* find next project to display in footer */
    const findProject = (project) => currentSlug === project.slug;

    let currentIndex = tempProject.findIndex(findProject);

    let nextIndex = (currentIndex + 1);

    let nextProject = tempProject[nextIndex];

    return (
        <div className="dark-footer">
            <div className="footer-left">
                <div className="footer-label accented-label">Next Project</div>
                <h3 className="next-section dark-next">{nextProject ? nextProject.title : 'All Projects'} →</h3>
            </div>
            <div className="footer-right">
                <a href={nextProject ? `/projects/${nextProject.slug}` : `/projects/`} className="nav-arrow dark-nav">→</a>
            </div>
        </div>
    )
}

export default FooterProjects