import k from"./ArticlesListItem.f7f3a429.js";import w from"./ProseA.6e171ab6.js";import v from"./ProseCodeInline.94398a19.js";import{a as A,w as I,b as S,u as c,o as a,e as n,f as o,h as i,F as g,r as C,i as e,j as d,p as B,k as L,q as N,l as V,c as b,m as q}from"./entry.f7add4ad.js";import{u as F}from"./asyncData.7a8108ab.js";/* empty css                         */import"./date.824a539b.js";/* empty css                             *//* empty css                   *//* empty css                            */const P=t=>(B("data-v-d211d7e3"),t=t(),L(),t),T={key:0,class:"articles-list"},j={class:"featured"},D={class:"layout"},E={key:1,class:"tour"},Y=P(()=>o("p",null,"Seems like there are no articles yet.",-1)),$=A({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const u=t,{data:m}=([s,l]=I(async()=>F("articles",async()=>await N(V(u.path)).sort({date:-1}).find())),s=await s,l(),s),r=S(()=>m.value||[]);return(z,G)=>{var p;const _=k,h=w,f=v;return(p=c(r))!=null&&p.length?(a(),n("div",T,[o("div",j,[i(_,{article:c(r)[0],featured:!0},null,8,["article"])]),o("div",D,[(a(!0),n(g,null,C(c(r).slice(1),(y,x)=>(a(),b(_,{key:x,article:y},null,8,["article"]))),128))])])):(a(),n("div",E,[Y,o("p",null,[e(" You can start by "),i(h,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:d(()=>[e("creating")]),_:1}),e(" one in the "),i(f,null,{default:d(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),Z=q($,[["__scopeId","data-v-d211d7e3"]]);export{Z as default};
