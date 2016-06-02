// Compiled by ClojureScript 1.8.51 {}
goog.provide('controller.user');
goog.require('cljs.core');
goog.require('cljc.validation');
goog.require('goog.dom');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('cljc.string_util');
goog.require('util.view');
goog.require('view.user');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
controller.user.error_handler = (function controller$user$error_handler(p__25417){
var map__25420 = p__25417;
var map__25420__$1 = ((((!((map__25420 == null)))?((((map__25420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25420):map__25420);
var m = map__25420__$1;
var response = cljs.core.get.call(null,map__25420__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
cljs.core.println.call(null,m);

return util.view.render_error_message.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(response));
});
controller.user.user = (function controller$user$user(username){
return ajax.core.GET.call(null,[cljs.core.str("/user/"),cljs.core.str(username)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.user.component.call(null,response);
})], null),util.view.main_container);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),controller.user.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.user.user_update = (function controller$user$user_update(username,field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
if(cljs.core.not.call(null,cljc.validation.about_QMARK_.call(null,new cljs.core.Keyword(null,"about","about",1423892543).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,"About should be between 0 and 500 characters long.");
} else {
if(cljs.core.not.call(null,cljc.validation.email_QMARK_.call(null,new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,"Not valid email.");
} else {
if(cljs.core.not.call(null,cljc.validation.url_QMARK_.call(null,new cljs.core.Keyword(null,"website","website",649297111).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,"Not valid url. Ex: https://www.google.com");
} else {
if(cljs.core.not.call(null,cljc.validation.github_or_twitter_QMARK_.call(null,new cljs.core.Keyword(null,"github","github",567794498).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,"Not valid GitHub Username. Ex: ertugrulcetin");
} else {
if(cljs.core.not.call(null,cljc.validation.github_or_twitter_QMARK_.call(null,new cljs.core.Keyword(null,"twitter","twitter",-589267671).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,"Not valid Twitter Username. Ex: ertuctn");
} else {
if(cljs.core.not.call(null,cljc.validation.show_email_QMARK__QMARK_.call(null,new cljs.core.Keyword(null,"show-email?","show-email?",-2011983569).cljs$core$IFn$_invoke$arity$1(data)))){
return util.view.render_error_message.call(null,"Not valid show email option.");
} else {
return ajax.core.POST.call(null,[cljs.core.str("/user/"),cljs.core.str(username)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),cljc.string_util.trim_map_values.call(null,cljs.core.update_in.call(null,data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about","about",1423892543)], null),((function (data){
return (function (p1__25422_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n\n",cljs.core.filter.call(null,((function (data){
return (function (x){
return !(clojure.string.blank_QMARK_.call(null,x));
});})(data))
,clojure.string.split.call(null,(function (){var or__22562__auto__ = p1__25422_SHARP_;
if(cljs.core.truth_(or__22562__auto__)){
return or__22562__auto__;
} else {
return "";
}
})(),/\n/))));
});})(data))
)),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (data){
return (function (_){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view.user.component_update], null),util.view.error_container);

return setTimeout(((function (data){
return (function (){
return goog.dom.getElement("errorContainerId").innerText = "";
});})(data))
,(3000));
});})(data))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),controller.user.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
}
}
}
}
});

//# sourceMappingURL=user.js.map