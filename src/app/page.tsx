'use client';

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Col, FormControl, FormLabel, Row, Spinner, Toast, ToastBody } from "react-bootstrap";
import { useForm } from "react-hook-form";

type FormData = {
    email: string;
    password: string;
}

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [ showToast, setShowToast ] = useState({
        state: false,
        msg: '',
        bg: ''
    });

    const errorMsg = {
        required: 'Preencha este campo',
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    const router = useRouter();

    const submit = async (data: FormData) => {

        setLoading(true);

        const res = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password
        });

        setLoading(false);

        if(res?.ok){

            router.push('/dashboard');
        }
        
        else{

            setShowToast({
                state: true,
                msg: 'Email ou senha inválidos!',
                bg: 'bg-danger'
            });
        }
    }

    return(
        <section className="d-flex align-items-center justify-content-center vh-100">
            <div className="login-form">
                <div className="text-center">
                    <h1>Login</h1>
                </div>

                <div>
                    <form onSubmit={handleSubmit(submit)}>
                        <Row>
                            <Col md="12">
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <FormControl { ...register('email', { required: errorMsg.required }  ) } type="email" id="email" className={`${errors.email?.message && 'is-invalid'}`} />
                                {errors.email?.message && (
                                    <small className="text-danger">{ String(errors.email.message) }</small>
                                )}
                            </Col>

                            <Col md="12">
                                <FormLabel htmlFor="password">Senha</FormLabel>
                                <FormControl { ...register('password', { required: errorMsg.required }) } type="password" id="password" className={`${errors.password?.message && 'is-invalid'}`} />
                                {
                                    errors.password?.message && <small className="text-danger">{ String(errors.password.message) }</small>
                                }
                            </Col>
                        </Row>

                        <div className="mt-4">
                            <Button className="" type="submit">
                                <span>Login</span> { loading && <Spinner variant="light" size="sm" className="ms-2" animation="grow" /> }
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            <Toast onClose={() => setShowToast({ state: false, msg: '', bg: '' })} show={showToast.state} autohide className={`position-fixed top-0 mt-5 fw-medium text-center text-light ${showToast.bg}`}>
                <ToastBody>
                    { showToast.msg }
                </ToastBody>
            </Toast>
        </section>
    );

}

export default Home;
