const EditPeople = ({people}) => {
    // call endpoint save people
    return (<>
    <label>Name</label>
    <input type="text" value={people?.name} />

    <label>DOB</label>
    <input type="datapicker" value={people?.name} />
    </>)

}

export default EditPeople;