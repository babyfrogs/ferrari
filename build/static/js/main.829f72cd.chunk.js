(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{172:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return g}));var r=n(1),c=n.n(r),a=n(4),i=n(32),o=n(66),s=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),f=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),b=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,f,b=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=b.length>3&&void 0!==b[3]?b[3]:"recent",o=b.length>4&&void 0!==b[4]&&b[4],s=!1,u={slot:0,confirmations:0,err:null},f=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(b,d){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),n);try{f=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),b(u))}),i)}catch(l){s=!0,console.error("WS error in setup",t,l)}case 2:if(s||!o){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,b(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,O(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[f]&&r.removeSignatureListener(f),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},l=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,o,u,f,b,d,l,p,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,a);case 3:return o=e.sent,u=new i.a(o,s,a),f={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return b=e.sent,d=b.data.itemsAvailable.toNumber(),l=b.itemsRedeemed.toNumber(),p=d-l,m=b.data.goLiveDate.toNumber(),m=new Date(1e3*m),e.abrupt("return",{candyMachine:f,itemsAvailable:d,itemsRedeemed:l,itemsRemaining:p,goLiveDate:m});case 15:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer(),e.from("edition")],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer()],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,b,l,g,O,x;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,j(r,s.publicKey);case 3:return u=e.sent,b=t.connection,l=t.program,e.next=7,m(s.publicKey);case 7:return g=e.sent,e.next=10,p(s.publicKey);case 10:return O=e.sent,e.next=13,b.getMinimumBalanceForRentExemption(o.a.span);case 13:return x=e.sent,e.next=16,l.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:g,masterEdition:O,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:f,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:x,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),d(u,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),O=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(6).Buffer)},361:function(e,t,n){},362:function(e,t,n){},363:function(e,t){},365:function(e,t){},372:function(e,t){},387:function(e,t){},388:function(e,t){},415:function(e,t){},416:function(e,t){},423:function(e,t){},424:function(e,t){},482:function(e,t){},484:function(e,t){},498:function(e,t){},502:function(e,t){},504:function(e,t){},514:function(e,t){},516:function(e,t){},547:function(e,t){},549:function(e,t){},556:function(e,t){},557:function(e,t){},582:function(e,t){},583:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o,s,u,f=n(2),b=n.n(f),d=n(28),l=n.n(d),p=(n(361),n(362),n(10)),m=n(1),j=n.n(m),g=n(4),O=n(14),x=n(89),y=n(90),h=n(610),v=n(615),k=n(619),w=n(618),S=n(37),P=n(53),K=n(169),R=n(172),M=n.p+"static/media/background.f6de7fdb.png",T=n(35),L=Object(y.a)(K.a)(r||(r=Object(x.a)([""]))),A=(y.a.span(c||(c=Object(x.a)([""]))),y.a.div(a||(a=Object(x.a)(["\nwidth: 30%;\nheight: 30%;\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\nbackground-color: #323232;\n\nfont-family: 'EXO 2';\nfont-size: xx-large;\ntext-align: center;\n"])))),B=y.a.div(i||(i=Object(x.a)(["\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100vw;\n  height: 100vh;\n"])),M),E=Object(y.a)(h.a)(o||(o=Object(x.a)([""]))),I=Object(y.a)(h.a)(s||(s=Object(x.a)(["\n  height: 80%;\n"]))),C=y.a.div(u||(u=Object(x.a)(["\nfont-family: 'EXO 2';\nfont-size: x-large;\nposition: absolute;\ntop: 5%;\nleft: 5%;\nbackground-color: #F9E52D;\n"]))),D=function(e){var t=Object(f.useState)(),n=Object(O.a)(t,2),r=(n[0],n[1]),c=Object(f.useState)(!1),a=Object(O.a)(c,2),i=a[0],o=a[1],s=Object(f.useState)(!1),u=Object(O.a)(s,2),b=u[0],d=u[1],l=Object(f.useState)({open:!1,message:"",severity:void 0}),m=Object(O.a)(l,2),x=m[0],y=m[1],h=Object(f.useState)(new Date(e.startDate)),K=Object(O.a)(h,2),M=(K[0],K[1],Object(P.c)()),D=Object(f.useState)(),W=Object(O.a)(D,2),N=W[0],Y=W[1],_=function(){var t=Object(g.a)(j.a.mark((function t(){var n,c,a,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,d(!0),!M||!(null===N||void 0===N?void 0:N.program)){t.next=10;break}return t.next=5,Object(R.c)(N,e.config,M.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(R.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(c=t.sent)||void 0===c?void 0:c.err)?y({open:!0,message:"Mint failed! Please try again!",severity:"error"}):y({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",o(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),y({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!M){t.next=23;break}return t.next=21,e.connection.getBalance(M.publicKey);case 21:i=t.sent,r(i/S.LAMPORTS_PER_SOL);case 23:return d(!1),t.finish(17);case 25:case"end":return t.stop()}}),t,null,[[0,12,17,25]])})));return function(){return t.apply(this,arguments)}}();return Object(f.useEffect)((function(){Object(g.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!M){t.next=5;break}return t.next=3,e.connection.getBalance(M.publicKey);case 3:n=t.sent,r(n/S.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[M,e.connection]),Object(f.useEffect)((function(){Object(g.a)(j.a.mark((function t(){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(M){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(R.b)(M,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,n.goLiveDate,n.itemsRemaining,n.itemsAvailable,Y(r);case 10:case"end":return t.stop()}}),t)})))()}),[M,e.candyMachineId,e.connection]),Object(T.jsxs)(B,{children:[Object(T.jsxs)(A,{children:[Object(T.jsx)("p",{children:"Mint your LAMBO, for 0.2 SOL!"}),M?Object(T.jsx)(I,{children:Object(T.jsx)(E,{disabled:i||b,onClick:_,variant:"contained",color:"primary",children:i?"SOLD OUT":b?Object(T.jsx)(v.a,{}):"MINT"})}):Object(T.jsx)(I,{children:Object(T.jsx)(L,{children:"Connect Wallet"})}),Object(T.jsx)(k.a,{open:x.open,autoHideDuration:6e3,onClose:function(){return y(Object(p.a)(Object(p.a)({},x),{},{open:!1}))},children:Object(T.jsx)(w.a,{onClose:function(){return y(Object(p.a)(Object(p.a)({},x),{},{open:!1}))},severity:x.severity,children:x.message})})]}),Object(T.jsx)(C,{children:Object(T.jsx)("a",{href:"https://www.carsnft.club/",children:"More info at our main page"})})]})},W=n(32),N=n(116),Y=n(348),_=n(616),F=new W.d.PublicKey("ABeYLakpNFzekckBJmqEbHNuLZDnwWkk7iJ9GcRVoWa6"),U=new W.d.PublicKey("mzp4qUP7MyYcqbujZYygXEKfjZotCpVKAxfoCTSdH1Y"),G=new W.d.PublicKey("9GcVbkRvuGJocGjcvbmxicmw9jc5H6L12c99G8CuPRXi"),q="mainnet-beta",z=new W.d.Connection("https://solana-api.projectserum.com"),V=parseInt("1635541200",10),H=Object(Y.a)({typography:{fontFamily:"Changa One"},palette:{type:"dark",primary:{main:"#F9E52D"}},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),J=function(){var e=Object(f.useMemo)((function(){return Object(S.clusterApiUrl)(q)}),[]),t=Object(f.useMemo)((function(){return[Object(N.a)(),Object(N.b)(),Object(N.c)(),Object(N.e)({network:q}),Object(N.d)({network:q})]}),[]);return Object(T.jsx)(_.a,{theme:H,children:Object(T.jsx)(P.a,{endpoint:e,children:Object(T.jsx)(P.b,{wallets:t,autoConnect:!0,children:Object(T.jsx)(K.b,{children:Object(T.jsx)(D,{candyMachineId:G,config:U,connection:z,startDate:V,treasury:F,txTimeout:3e4})})})})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,620)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};l.a.render(Object(T.jsx)(b.a.StrictMode,{children:Object(T.jsx)(J,{})}),document.getElementById("root")),X()}},[[583,1,2]]]);
//# sourceMappingURL=main.829f72cd.chunk.js.map