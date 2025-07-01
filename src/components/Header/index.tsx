export const Header = () => {
    return(
        <nav className="w-full flex justify-between fixed px-4 pt-4 top-0 z-10">
            <span>SQL</span>
            <ul className="flex gap-8"> 
                <li>Work</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}