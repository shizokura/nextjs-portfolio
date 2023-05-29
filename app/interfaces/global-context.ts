export default interface GlobalContextValue {
    active: [
        getActive: { index: number; from: string }, 
        setActive: React.Dispatch<React.SetStateAction<{ index: number; from: string }>>
    ];
}