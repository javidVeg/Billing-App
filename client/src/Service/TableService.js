import http from "../http-common";

    const getAll = () => {
    return http.get("/patientsinfo");
    };

    const get = (id) => {
    return http.get(`/patientsinfo/${id}`);
    };

    const create = (data) => {
    return http.post("/patientsinfo", data);
    };

    const register = (data) => {
    return http.post("/auth", data);
    };

    const signIn = (data) => {
    return http.post("/auth/login", data);
    };

    const update = (id, data) => {
    return http.put(`/patientsinfo/${id}`, data);
    };

    const remove = (id) => {
    return http.delete(`/patientsinfo/${id}`);
    };

    const removeAll = () => {
    return http.delete(`/patientsinfo`);
    };

    const findByFirstName = (firstName) => {
    return http.get(`/patientsinfo?firstName=${firstName}`);
    };

    const TableService = {
    getAll,
    get,
    register,
    signIn,
    create,
    update,
    remove,
    removeAll,
    findByFirstName,
    };

    export default TableService;