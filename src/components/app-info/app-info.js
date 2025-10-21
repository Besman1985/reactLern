import "./app-info.css";

const AppInfo = ({allEmployees, riseTake}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {allEmployees}</h2>
            <h2>Премию получат: {riseTake}</h2>
        </div>
    )
}

export default AppInfo;