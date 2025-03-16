import './Box.css';

export const Box = ({ proyectName, description, githublink, projectlink }) => {

    const to = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className='boxcontainer'>
            <p className='proyectName'>{proyectName}</p>
            <p className='proyectDesc'>{description}</p>  
            <p>
                <button className='ghButt' onClick={() => to(githublink)}>github</button>
                {projectlink && (
                    <button className='pButt' onClick={() => to(projectlink)}>go!</button>
                )}
            </p>
        </div>
    );
};

export default Box;
