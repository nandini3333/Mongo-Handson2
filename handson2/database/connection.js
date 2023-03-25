const {MongoClient} = require('mongodb')

const url = "mongodb+srv://nandinibhaskar:nandinibhaskar@cluster0.hedfdsc.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url)

const findInDB = async() => {
    await client.connect()
    const database = client.db("HumanResource")
    const collection = database.collection("employee")
    const dbResponse = await collection.find().toArray()
    await client.close()
    return dbResponse
}

const findEmployeeSalaryInDB = async (query) => {
    const database = client.db("HumanResource")
    const collection = database.collection("employee")
    await client.connect()
    const dbResponse = await collection.find(query).toArray()
    await client.close()
    return dbResponse
}

const findEmpExperienceInDB = async (query) => {
    const database = client.db("HumanResource")
    const collection = database.collection("employee")
    await client.connect()
    const dbResponse = await collection.find(query).toArray()
    await client.close()
    return dbResponse
}

const findEmpGradwithExp = async (query) => {
    const database = client.db("HumanResource")
    const collection = database.collection("employee")
    await client.connect()
    const dbResponse = await collection.find(query).toArray()
    await client.close()
    return dbResponse
}

const updateSalary = async (filteredcond, value) => {
    const database = client.db("HumanResource")
    const collection = database.collection("employee")
    await client.connect()
    const dbResponse = await collection.updateMany(filteredcond, value)
    await client.close()
    return dbResponse
}

const deleteEmployee = async (filtercond) => {
    const database = client.db("HumanResource")
    const collection = database.collection("employee")
    await client.connect()
    const dbResponse = await collection.deleteMany(filtercond)
    await client.close()
    return dbResponse
}

module.exports = {findInDB, findEmployeeSalaryInDB,findEmpExperienceInDB,
    findEmpGradwithExp,updateSalary,deleteEmployee }