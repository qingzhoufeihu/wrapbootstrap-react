import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route, Link,
} from 'react-router-dom';
import {
	Layout, Menu, Icon,
} from 'antd';
import Dashboard1 from './components/dashboards/dashboard_1';
import Dashboard2 from './components/dashboards/dashboard_2';
import Dashboard3 from './components/dashboards/dashboard_3';
import Dashboard4 from './components/dashboards/dashboard_4';
import Dashboard5 from './components/dashboards/dashboard_5';

import Layouts from './components/layouts';

import Flot from './components/graphs/flot';
import Morris from './components/graphs/morris';
import Rickshaw from './components/graphs/rickshaw';
import Chart from './components/graphs/chart';
import Chartist from './components/graphs/chartist';
import C3 from './components/graphs/c3';
import Peity from './components/graphs/peity';
import Sparkline from './components/graphs/sparkline';

import Inbox from './components/mailbox/inbox';
import EmailView from './components/mailbox/emailview';
import ComposeEmail from './components/mailbox/composeemail';
import EmailTemplates from './components/mailbox/emailtemplates';

import Metrics from './components/metrics';

import Widgets from './components/widgets';

import BasicForm from './components/forms/basicform';
import AdvancedPlugins from './components/forms/advancedplugins';
import Wizard from './components/forms/wizard';
import FileUpload from './components/forms/fileupload';
import TextEditor from './components/forms/texteditor';
import AutoComplete from './components/forms/autocomplete';
import Markdown from './components/forms/markdown';

import Contacts from './components/appviews/contacts';
import Profile from './components/appviews/profile';
import Profilev2 from './components/appviews/profilev2';
import Contactsv2 from './components/appviews/contactsv2';
import Projects from './components/appviews/projects';
import ProjectDetail from './components/appviews/projectdetail';
import ActivityStream from './components/appviews/activitystream';
import TeamsBoard from './components/appviews/teamsboard';
import SocialFeed from './components/appviews/socialfeed';
import Clients from './components/appviews/clients';
import OutlookView from './components/appviews/outlookview';
import VoteList from './components/appviews/votelist';
import FileManager from './components/appviews/filemanager';
import Calendar from './components/appviews/calendar';
import IssueTracker from './components/appviews/issuetracker';
import Blog from './components/appviews/blog';
import Article from './components/appviews/article';
import FAQ from './components/appviews/faq';
import Timeline from './components/appviews/timeline';
import PinBoard from './components/appviews/pinboard';

import SearchResults from './components/otherpages/searchresults';
import LockScreen from './components/otherpages/lockscreen';
import Invoice from './components/otherpages/invoice';
import Login from './components/otherpages/login';
import Loginv2 from './components/otherpages/loginv2';
import ForgetPassword from './components/otherpages/forgetpassword';
import Register from './components/otherpages/register';
import Page404 from './components/otherpages/404page';
import Page500 from './components/otherpages/500page';
import EmptyPage from './components/otherpages/emptypage';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

let index = 1;

class App extends Component {
	state = {
		collapsed: false,
		openKeys: [],
	}
	onCollapse = collapsed => this.setState({ collapsed })
	onTitleClick = (e) => this.setState({ openKeys: [e.key] })
	render() {
		return (
			<Router>
				<Layout style={{ minHeight: '100vh' }}>
					<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
						<Menu theme='dark' openKeys={this.state.openKeys} defaultOpenKeys={['sub1']} defaultSelectedKeys={['1']} mode='inline'>
							<SubMenu key='sub1' title={<span><Icon type='appstore' /><span>Dashboards</span></span>} onTitleClick={this.onTitleClick}>
								<Menu.Item key={index++}><Link to='/dashboard1'>Dashboard v.1</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/dashboard2'>Dashboard v.2</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/dashboard3'>Dashboard v.3</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/dashboard4'>Dashboard v.4</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/dashboard5'>Dashboard v.5</Link></Menu.Item>
							</SubMenu>
							<Menu.Item key={index++}>
								<Icon type='layout' />
								<span><Link to='/layouts'>Layouts</Link></span>
							</Menu.Item>
							<SubMenu key='sub2' title={<span><Icon type='bar-chart' /><span>Graphs</span></span>} onTitleClick={this.onTitleClick}>
								<Menu.Item key={index++}><Link to='/flot'>Flot Charts</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/morris'>Morris.js Charts</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/rickshaw'>Richshaw Charts</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/chart'>Chart.js</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/chartist'>Chartist</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/c3'>c3 charts</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/peity'>Peity Charts</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/sparkline'>Sparkline Charts</Link></Menu.Item>
							</SubMenu>
							<SubMenu key='sub3' title={<span><Icon type='mail' /><span>Mailbox</span></span>} onTitleClick={this.onTitleClick}>
								<Menu.Item key={index++}><Link to='/inbox'>Inbox</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/emailview'>Email view</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/composeemail'>Compose email</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/emailtemplates'>Email templates</Link></Menu.Item>
							</SubMenu>
							<Menu.Item key={index++}>
								<Icon type='pie-chart' />
								<span><Link to='/metrics'>Metrics</Link></span>
							</Menu.Item>
							<Menu.Item key={index++}>
								<Icon type='hourglass' />
								<span><Link to='/widgets'>Widgets</Link></span>
							</Menu.Item>
							<SubMenu key='sub4' title={<span><Icon type='laptop' /><span>Forms</span></span>} onTitleClick={this.onTitleClick}>
								<Menu.Item key={index++}><Link to='/basicform'>Basic form</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/advancedplugins'>Advanced Plugins</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/wizard'>Wizard</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/fileupload'>File Upload</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/texteditor'>Text Editor</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/autocomplete'>Autocomplete</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/markdown'>Markdown</Link></Menu.Item>
							</SubMenu>
							<SubMenu key='sub5' title={<span><Icon type='laptop' /><span>App Views</span></span>} onTitleClick={this.onTitleClick}>
								<Menu.Item key={index++}><Link to='/contacts'>Contacts</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/profile'>Profile</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/profilev2'>Profile v.2</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/contactsv2'>Contacts v.2</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/projects'>Projects</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/projectdetail'>Project detail</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/activitystream'>Activity stream</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/teamsboard'>Teams board</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/socialfeed'>Social feed</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/clients'>Clients</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/outlookview'>Outlook view</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/votelist'>Vote list</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/filemanager'>File manager</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/calendar'>Calendar</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/issuetracker'>Issue tracker</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/blog'>Blog</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/article'>Article</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/faq'>FAQ</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/timeline'>Timeline</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/pinboard'>Pin board</Link></Menu.Item>
							</SubMenu>
							<SubMenu key='sub6' title={<span><Icon type='laptop' /><span>Other Pages</span></span>} onTitleClick={this.onTitleClick}>
								<Menu.Item key={index++}><Link to='/searchresults'>Search results</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/lockscreen'>Lockscreen</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/invoice'>Invoice</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/login'>Login</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/loginv2'>Login v.2</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/forgetpassword'>Forget password</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/register'>Register</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/404page'>404 Page</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/500page'>500 Page</Link></Menu.Item>
								<Menu.Item key={index++}><Link to='/emptypage'>Empty page</Link></Menu.Item>
							</SubMenu>
						</Menu>
					</Sider>
					<Route path='/dashboard1' component={Dashboard1} />
					<Route path='/dashboard2' component={Dashboard2} />
					<Route path='/dashboard3' component={Dashboard3} />
					<Route path='/dashboard4' component={Dashboard4} />
					<Route path='/dashboard5' component={Dashboard5} />

					<Route path='/layouts' component={Layouts} />

					<Route path='/flot' component={Flot} />
					<Route path='/morris' component={Morris} />
					<Route path='/rickshaw' component={Rickshaw} />
					<Route path='/chart' component={Chart} />
					<Route path='/chartist' component={Chartist} />
					<Route path='/c3' component={C3} />
					<Route path='/peity' component={Peity} />
					<Route path='/sparkline' component={Sparkline} />

					<Route path='/inbox' component={Inbox} />
					<Route path='/emailview' component={EmailView} />
					<Route path='/composeemail' component={ComposeEmail} />
					<Route path='/emailtemplates' component={EmailTemplates} />

					<Route path='/metrics' component={Metrics} />

					<Route path='/widgets' component={Widgets} />

					<Route path='/basicform' component={BasicForm} />
					<Route path='/advancedplugins' component={AdvancedPlugins} />
					<Route path='/wizard' component={Wizard} />
					<Route path='/fileupload' component={FileUpload} />
					<Route path='/texteditor' component={TextEditor} />
					<Route path='/autocomplete' component={AutoComplete} />
					<Route path='/markdown' component={Markdown} />

					<Route path='/contacts' component={Contacts} />
					<Route path='/profile' component={Profile} />
					<Route path='/profilev2' component={Profilev2} />
					<Route path='/contactsv2' component={Contactsv2} />
					<Route path='/projects' component={Projects} />
					<Route path='/projectdetail' component={ProjectDetail} />
					<Route path='/activitystream' component={ActivityStream} />
					<Route path='/teamsboard' component={TeamsBoard} />
					<Route path='/socialfeed' component={SocialFeed} />
					<Route path='/clients' component={Clients} />
					<Route path='/outlookview' component={OutlookView} />
					<Route path='/votelist' component={VoteList} />
					<Route path='/filemanager' component={FileManager} />
					<Route path='/calendar' component={Calendar} />
					<Route path='/issuetracker' component={IssueTracker} />
					<Route path='/blog' component={Blog} />
					<Route path='/article' component={Article} />
					<Route path='/faq' component={FAQ} />
					<Route path='/timeline' component={Timeline} />
					<Route path='/pinboard' component={PinBoard} />

					<Route path='/searchresults' component={SearchResults} />
					<Route path='/lockscreen' component={LockScreen} />
					<Route path='/invoice' component={Invoice} />
					<Route path='/login' component={Login} />
					<Route path='/loginv2' component={Loginv2} />
					<Route path='/forgetpassword' component={ForgetPassword} />
					<Route path='/register' component={Register} />
					<Route path='/404page' component={Page404} />
					<Route path='/500page' component={Page500} />
					<Route path='/emptypage' component={EmptyPage} />
				</Layout>
			</Router>
		)
	}
}

export default App;
