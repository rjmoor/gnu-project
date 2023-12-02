import React from 'react';
import './Director.css';


const Director = ({ onRouteChange }) => {
    return (
        <div>
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white-10">
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0 white">
                            <legend className="f1 fw6 ph0 mh0">What would you like to do first?</legend>
                            <div className='radio-buttons'>
                                <input type="radio" id="radio1" name="radio" value="first" />
                                <label htmlFor="radio">Create a new project</label>
                                <br />
                                <input type="radio" id="radio2" name="radio" value="second" />
                                <label htmlFor="radio">Edit an existing project</label>
                                <br />
                                <input type="radio" id="radio3" name="radio" value="third" />
                                <label htmlFor="radio">View an existing project</label>
                                <br />
                                <input type="radio" id="radio4" name="radio" value="fourth" />
                                <label htmlFor="radio">Delete an existing project</label>
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={() => onRouteChange('home')}
                                className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white"
                                type="submit"
                                value="Sign in"
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')} className="f6 link dim white db pointer">Register</p>
                        </div>
                    </form>
                </main>
            </article>

        </div>
    );
}

export default Director;