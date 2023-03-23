import './Footer.css';

function Footer({tasks}) {
    let actTasks = [];
    let finTasks = [];

    tasks.map(task => {
        actTasks = tasks.filter(task => task.status === 'backlog');
        finTasks = tasks.filter(task => task.status === 'finished');
        })

    return (
        <footer>
            <div className="tasksCount">
                <span className="tasksCountItem">Active tasks: {actTasks.length > 0? actTasks.length : 0}</span>
                <span className="tasksCountItem">Finished tasks: {finTasks.length > 0? finTasks.length: 0}</span>
            </div>
            <span className="author">Kanban board by @suananetta, 2023</span>
        </footer>
    )
}

export default Footer;