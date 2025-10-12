const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-7xl w-full h-fit">
            {children}
        </div>
    );
}

export default Wrapper