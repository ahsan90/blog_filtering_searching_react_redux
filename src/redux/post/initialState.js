import image_sources from '../../utility/image_source'
import utils from '../../utility/utils'

const {Categories, Authors} = utils


const initialState = [
    {
        id: 1,
        title: 'Learning React is Fun',
        category: Categories.Web_Dev,
        authorName: Authors.STEVEN_PERRY,
        image_url: image_sources.image_1,
        gravatar: image_sources.get_avatar(),
        meta: '11 Nov, 2022. 6 min read'
    },
    {
        id: 2,
        title: 'Bost your conversation',
        category: Categories.Communication,
        authorName: Authors.Mathew_Wicks,
        image_url: image_sources.image_2,
        gravatar: image_sources.get_avatar(),
        meta: '02 Dec, 2022. 5 min read'
    },
    {
        id: 3,
        title: 'Think in a Redux',
        category: Categories.Web_Dev,
        authorName: Authors.JOHN_DOE,
        image_url: image_sources.image_3,
        gravatar: image_sources.get_avatar(),
        meta: '11 Jan, 2023. 10 min read'
    },
    {
        id: 4,
        title: 'Effective Communication',
        category: Categories.Communication,
        authorName: Authors.STEVEN_PERRY,
        image_url: image_sources.image_4,
        gravatar: image_sources.get_avatar(),
        meta: '11 Jul, 2022. 6 min read'
    },
    {
        id: 5,
        title: 'Build Robot using modern Embeded System',
        category: Categories.Science,
        authorName: Authors.MD_HOQUE,
        image_url: image_sources.image_5,
        gravatar: image_sources.get_avatar(),
        meta: '11 Jul, 2022. 6 min read'
    },
    {
        id: 6,
        title: 'Learn Practical Redux',
        category: Categories.Web_Dev,
        authorName: Authors.Mathew_Wicks,
        image_url: image_sources.image_6,
        gravatar: image_sources.get_avatar(),
        meta: '15 June, 2022. 6 min read'
    },
    {
        id: 7,
        title: 'Bollywood News',
        category: Categories.Entertainment,
        authorName: Authors.JOHN_DOE,
        image_url: image_sources.image_1,
        gravatar: image_sources.get_avatar(),
        meta: '20 Jul, 2020. 11 min read'
    },
    {
        id: 8,
        title: 'AI is changing the world',
        category: Categories.Science,
        authorName: Authors.MD_HOQUE,
        image_url: image_sources.image_2,
        gravatar: image_sources.get_avatar(),
        meta: '11 Oct, 2022. 20 min read'
    },
    {
        id: 9,
        title: 'Skill Development',
        category: Categories.Communication,
        authorName: Authors.Mathew_Wicks,
        image_url: image_sources.image_3,
        gravatar: image_sources.get_avatar(),
        meta: '10 Sept, 2022. 6 min read'
    },
]

export default initialState