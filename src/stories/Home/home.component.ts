import { Component } from '@angular/core';

@Component({
  selector: 'storybook-page',
  templateUrl:'../../app/pages/home/home.component.html',
  styleUrls: ['./home.css', '../style.css'],
})
export default class PageComponent {

}

// export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
//   <article>
//     <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

// );
// Page.propTypes = {
//   user: PropTypes.shape({}),
//   onLogin: PropTypes.func.isRequired,
//   onLogout: PropTypes.func.isRequired,
//   onCreateAccount: PropTypes.func.isRequired,
// };

// Page.defaultProps = {
//   user: null,
// };
