<template>
  <div>
    <div class="filters">
      <FilterBrand
        :data="brands"
        :brandParam="brand"
        @handleBrandClose="handleBrandClose"
      />
      <FilterType :typeParam="type" @handleTypeClose="handleTypeClose" />
      <FilterLanguage
        :langParam="language"
        @handleLangClose="handleLangClose"
      />
      <FilterSize @handleSizeClose="handleSizeClose" :sizeParam="size" />
      <div class="clear-filter">
        <i class="bi bi-x"></i>
        <div @click="handleClearFilter" class="">Clear filters</div>
      </div>
      <!-- <div class="show-creative">
        <a href="#">Show creatives</a>
      </div> -->
    </div>
    <div class="main-content">
      <div class="top-bar">
        <div class="search">
          <div class="search-input">
            <input type="text" placeholder="Find creatives" />
          </div>
          <div class="button">
            <button>Search</button>
          </div>
        </div>
        <div class="dynamic-params">
          <div class="afp">
            <Afp />
          </div>
          <div class="afp">
            <filter-time
              :sortParam="sort_by_time"
              @handleSortClose="handleSortClose"
            />
          </div>
        </div>
      </div>
      <div class="creatives">
        <div
          class="creative"
          v-for="(creative, idx) in creatives"
          :key="'creative_' + idx"
        >
          <div class="left">
            <div class="image-wrapper">
              <div class="image">
                <img
                  :src="HOST + creative.template.preview_image.original.src"
                  :alt="creative.template.preview_image.original.alt"
                />
              </div>
            </div>
            <div class="info">
              <div class="item">
                <div class="label">CREATIVE NAME</div>
                <div class="value">{{ creative.name }}</div>
              </div>
              <div class="item">
                <div class="label">BRAND</div>
                <div class="value">{{ creative.brand.name }}</div>
              </div>
              <div class="item">
                <div class="label">LANGUAGE</div>
                <div class="value">
                  {{ languageDisplay(creative.language) }}
                </div>
              </div>
              <div class="item">
                <div class="label">TYPE</div>
                <div class="value">{{ typeDisplay(creative.type) }}</div>
              </div>
              <div class="item">
                <div class="label">SIZE</div>
                <div class="value">{{ sizeDisplay(creative.size) }}</div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="link-input">
              <div class="link">
                {{
                  HOST +
                  `/visit/?ci=${creative.id}&uai=${getProfile.affiliate_id}`
                }}
              </div>
            </div>
            <div class="buttons">
              <button @click="creativeLinkCopy(creative)">
                <i class="bi bi-clipboard"></i>
                Copy
              </button>
              <button>
                <i class="bi bi-eye"></i>
                Get HTML Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Action, Watch, Getter } from "nuxt-property-decorator";
import { NS_COMMON, NS_USER } from "../utils/store/namespace.names";
import { FETCH_CREATIVES, FETCH_BRANDS } from "../utils/store/action.names";
import { GET_PROFILE } from "../utils/store/getter.names";
import { namespaced, deepCopy } from "../utils/utils";

import Afp from "../components/filters/afp";
import FilterBrand from "../components/filters/filter-brand";
import FilterLanguage from "../components/filters/filter-language";
import FilterSize from "../components/filters/filter-size";
import FilterTime from "../components/filters/filter-time";
import FilterType from "../components/filters/filter-type";

function calculatePage(count, limit, page, totalPageCount, paginationSteps) {
  const totalPage = Math.ceil(count / limit);
  totalPageCount = totalPage;
  if (totalPage > 1) {
    paginationSteps = calculateNext(totalPage, page, paginationSteps);
    paginationSteps = calculatePrev(page, paginationSteps);
  }
  return [totalPageCount, paginationSteps];
}

function calculateNext(totalPage, page, paginationSteps) {
  if (totalPage > 1) {
    var next = page;
    for (var i = 0; i < totalPage; i++) {
      if (i > 3) {
        break;
      }
      if (page < totalPage) {
        next = next + 1;
        if (next > totalPage) {
          break;
        }
        paginationSteps.push(next);
      }
    }
  }
  return paginationSteps;
}

function calculatePrev(page, paginationSteps) {
  if (page > 1) {
    var counter = 0;
    for (var i = page - 1; i > 0; i--) {
      if (counter > 2) {
        break;
      }
      paginationSteps.unshift(i);
      counter += 1;
    }
  }
  return paginationSteps;
}

@Component({
  name: "MarketingTools",
  components: {
    FilterBrand,
    FilterType,
    FilterLanguage,
    FilterSize,
    Afp,
    FilterTime,
  },
})
export default class MarketingTools extends Vue {
  @Action(namespaced(NS_COMMON, FETCH_CREATIVES)) fetchCreatives;
  @Action(namespaced(NS_COMMON, FETCH_BRANDS)) fetchBrands;

  @Getter(namespaced(NS_USER, GET_PROFILE)) getProfile;

  get HOST() {
    return this.$config.HOST;
  }

  async creativeLinkCopy(creative) {
    try {
      const link = `${this.HOST}/visit/?ci=${creative.id}&uai=${this.getProfile.affiliate_id}`;
      this.$copyText(link);
      this.$toast.success("Link copied successfully!");
    } catch (e) {
      console.log(e);
    }
  }

  @Watch("$route", { deep: true })
  handleRouteChange(val, oldVal) {
    this.fetchData();
  }

  fetchData() {
    var params = {
      limit: this.limit,
      offset: this.offset,
      name: this.name,
      language: this.language,
      type: this.type,
      size: this.size,
      brand: this.brand,
      sort_by_time: this.sort_by_time,
    };

    this.fetchCreatives(params).then((data) => {
      this.creatives = data.results;
      this.count = data.count;
    });

    // this.totalPageCount = "";
    // this.paginationSteps = [this.page];
    // [this.totalPageCount, this.paginationSteps] = calculatePage(
    //   this.count,
    //   this.limit,
    //   this.page,
    //   this.totalPageCount,
    //   this.paginationSteps
    // );
  }

  async asyncData({ route, $axios, store, error }) {
    var count = 0;
    var page = 1;
    var limit = route.query.limit ? route.query.limit : 20;
    var offset = route.query.offset ? route.query.offset : 0;
    var totalPageCount = "";
    var name = route.query.name ? route.query.name : "";
    var language = route.query.language ? route.query.language : "";
    var type = route.query.type ? route.query.type : "";
    var size = route.query.size ? route.query.size : "";
    var brand = route.query.brand ? route.query.brand : "";
    var sort_by_time = route.query.sort_by_time ? route.query.sort_by_time : "";

    if (offset != 0) {
      page = Math.ceil(offset / limit) + 1;
    }
    var paginationSteps = [page];

    var params = {
      limit: limit,
      offset: offset,
      name: name,
      language: language,
      type: type,
      size: size,
      brand: brand,
      sort_by_time: sort_by_time,
    };

    var creatives = [];
    const getCreatives = await store
      .dispatch(namespaced(NS_COMMON, FETCH_CREATIVES), params)
      .then((data) => {
        creatives = data.results;
        count = data.count;
      })
      .catch((e) => {
        if (e.response.status === 404) {
          error({ statusCode: 404 });
        } else {
          error({ statusCode: 500 });
        }
      });

    var [totalPageCount, paginationSteps] = calculatePage(
      count,
      limit,
      page,
      totalPageCount,
      paginationSteps
    );

    var brands = [];
    const getBrands = await store
      .dispatch(namespaced(NS_COMMON, FETCH_BRANDS), params)
      .then((data) => {
        brands = data.results;
      })
      .catch((e) => {
        if (e.response.status === 404) {
          error({ statusCode: 404 });
        } else {
          error({ statusCode: 500 });
        }
      });

    return {
      creatives,
      count,
      page,
      limit,
      offset,
      paginationSteps,
      totalPageCount,
      name,
      language,
      type,
      size,
      brand,
      sort_by_time,
      brands,
    };
  }

  languageDisplay(txt) {
    if (txt == 0) {
      return "English";
    } else if (txt == 1) {
      return "Arabic";
    }
  }

  typeDisplay(txt) {
    if (txt == 0) {
      return "Link";
    } else if (txt == 1) {
      return "Banner";
    }
  }

  sizeDisplay(txt) {
    if (txt == 0) {
      return "Unavailable";
    } else if (txt == 1) {
      return "1920 x 1080";
    } else if (txt == 2) {
      return "1440 x 780";
    }
  }

  handleBrandClose(data) {
    this.brand = data;
    var query = deepCopy(this.$route.query);
    query["brand"] = this.brand;
    this.$router.push({ query: query });
  }

  handleTypeClose(data) {
    this.type = data;
    var query = deepCopy(this.$route.query);
    query["type"] = this.type;
    this.$router.push({ query: query });
  }

  handleLangClose(data) {
    this.language = data;
    var query = deepCopy(this.$route.query);
    query["language"] = this.language;
    this.$router.push({ query: query });
  }

  handleSizeClose(data) {
    this.size = data;
    var query = deepCopy(this.$route.query);
    query["size"] = this.size;
    this.$router.push({ query: query });
  }

  handleSortClose(data) {
    this.sort_by_time = data;
    var query = deepCopy(this.$route.query);
    query["sort_by_time"] = this.sort_by_time;
    this.$router.push({ query: query });
  }

  handleClearFilter() {
    this.brand = null;
    this.type = null;
    this.language = null;
    this.size = null;
    this.sort_by_time = null;
    this.$router.push({ query: {} });
  }
}
</script>

<style scoped lang="scss">
.filters {
  width: 100%;
  height: 60px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  i {
    font-size: 20px;
  }
  .clear-filter {
    cursor: pointer;
    color: red;
    height: 100%;
    display: flex;
    gap: 1px;
    justify-content: center;
    align-items: center;
  }
  .show-creative {
    a {
      align-items: center;
      background-color: #01aeab;
      border-radius: 8px;
      color: #fff;
      display: flex;
      font-size: 12px;
      font-weight: 700;
      gap: 10px;
      height: 40px;
      justify-content: center;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
.main-content {
  height: 100vh;
  width: 100%;
  margin-top: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .top-bar {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 30px;
    .search {
      display: flex;
      gap: 10px;
      .search-input {
        input {
          height: 30px;
          width: 250px;
          border: 1px solid grey;
          padding-left: 10px;
          color: black;
          border-radius: 8px;
        }
      }
      .button {
        button {
          align-items: center;
          background-color: #01aeab;
          color: #fff;
          display: flex;
          font-size: 12px;
          font-weight: 700;
          gap: 10px;
          height: 30px;
          justify-content: center;
          padding-left: 10px;
          padding-right: 10px;
          border: 1px solid grey;
          border-radius: 8px;
        }
      }
    }
    .dynamic-params {
      display: flex;
      gap: 10px;
    }
  }
  .creatives {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .hr {
      height: 1px;
      width: 100%;
      border: 1px solid #f1f1f1;
    }
    .creative {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #f1f1f1;
      .left {
        display: flex;
        height: 100%;
        align-items: center;
        gap: 20px;
        .image-wrapper {
          height: 100%;
          display: flex;
          align-items: center;
          .image {
            height: 180px;
            width: 250px;
          }
        }

        .info {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .item {
            display: flex;
            .label {
              width: 150px;
              font-size: 15px;
              font-weight: 600;
            }
            .value {
              font-size: 14px;
            }
          }
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        gap: 15px;
        .link-input {
          height: 80px;
          width: 500px;
          background-color: #f1f1f1;
          padding: 10px;
        }
        .buttons {
          display: flex;
          gap: 10px;
          button {
            align-items: center;
            background-color: #01aeab;
            color: #fff;
            display: flex;
            font-size: 12px;
            font-weight: 700;
            gap: 10px;
            height: 30px;
            justify-content: center;
            padding-left: 10px;
            padding-right: 10px;
            border: 1px solid grey;
            border-radius: 8px;
          }
        }
      }
    }
  }
}
</style>
