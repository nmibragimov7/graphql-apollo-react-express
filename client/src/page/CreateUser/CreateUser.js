import React from 'react';
import {useFormik} from "formik";
import {useMutation} from "@apollo/client";
import {useNavigate} from "react-router";

import styles from './CreateUser.module.scss';
import {CREATE_USER} from "../../actions/mutation/user";

const CreateUser = () => {
    const [createUser] = useMutation(CREATE_USER);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            middleName: ""
        },
        async onSubmit(values) {
            const response = await createUser({
                variables: {
                    input: {
                        ...values
                    }
                }
            });
            if(response?.data?.createUser?.id) {
                navigate('/');
            }
        }
    });

    return (
        <div className="flex flex-col gap-4 px-8">
            <h3 className="text-2xl font-bold text-primary-blue">Добавить пользователя</h3>
            <input name="username"
                   className={styles.input}
                   value={formik.values.username}
                   onChange={formik.handleChange}
                   type="text"
                   placeholder="Логин"/>
            <input
                name="password"
                className={styles.input}
                value={formik.values.password}
                onChange={formik.handleChange}
                type="password"
                placeholder="Пароль"/>
            <input
                name="firstName"
                className={styles.input}
                value={formik.values.firstName}
                onChange={formik.handleChange}
                type="text"
                placeholder="Фамилия"/>
            <input
                name="lastName"
                className={styles.input}
                value={formik.values.lastName}
                onChange={formik.handleChange}
                type="text"
                placeholder="Имя"/>
            <input
                name="middleName"
                className={styles.input}
                value={formik.values.middleName}
                onChange={formik.handleChange}
                type="text"
                placeholder="Отчество"/>
            <button
                className="bg-primary-blue hover:bg-primary-blue/90 disabled:bg-primary-blue/90 shadow text-white px-8 py-4"
                onClick={formik.handleSubmit}>
                Создать
            </button>
        </div>
    );
};

export default CreateUser;
