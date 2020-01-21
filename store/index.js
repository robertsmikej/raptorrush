export const state = () => ({
    pages: {},
    nav: [],
    sitewide: {},
    employees: {},
    platforms: {}
});

function sortItems(data) {
    let newdata = [];
    for (var d in data) {
        let keys = Object.keys(newdata);
        let item = data[d];
        if (item.shown || item.status || item.status === 'published') {
            newdata.push(item);
        }
    }
    return newdata;
}

export const mutations = {
    setPages(state, data) {
        for (var page in data) {
            state.pages[data[page].page_name] = data[page];
            let newsections = {};
            for (var s in data[page].sections) {
                var section = data[page].sections[s];
                var slug = section.header.toLowerCase().replace(/ /g, "_");
                section.slug = slug;
                newsections[slug] = section;
            }
            data[page].sections = newsections;
        }
        for (var page in data) {
            state.pages[data[page].slug.toLowerCase().replace(/ /g, "_").replace(/-/g, "_")] = data[page];
        }
    },
    setNav(state, data) {
        var checkLive = sortItems(data);
        var populate = checkLive[0].nav_items;
        state.nav = populate;
    },
    setSitewide(state, data) {
        state.sitewide = data;
    },
    setEmployees(state, data) {
        state.employees = data.list;
    },
    setPlatforms(state, data) {
        state.platforms = data.list;
    }
};

export const getters = {
    sitewide: state => state.sitewide,
    nav: state => state.nav,
    pages: state => state.pages,
    employees: state => state.employees,
    platforms: state => state.platforms
};

export const actions = {
    async nuxtServerInit({ commit }) {
        var pages = await require.context('~/assets/content/page/', false, /\.json$/);
        var p = pages.keys().map(key => {
            let res = pages(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setPages', p);

        let navfiles = await require.context('~/assets/content/nav/', false, /\.json$/);
        let navs = navfiles.keys().map(key => {
            let res = navfiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setNav', navs);

        let sitewideFiles = await require.context('~/assets/content/sitewide/', false, /\.json$/);
        let sitewides = sitewideFiles.keys().map(key => {
            let res = sitewideFiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setSitewide', sitewides[0]);

        var files = await require.context('~/assets/content/employees/', false, /\.json$/);
        var file = files.keys().map(key => {
            var res = files(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setEmployees', file[0]);

        var files = await require.context('~/assets/content/platforms/', false, /\.json$/);
        var file = files.keys().map(key => {
            var res = files(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setPlatforms', file[0]);
    }
};