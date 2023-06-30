"use strict";
exports.id = 308;
exports.ids = [308];
exports.modules = {

/***/ 2308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/assets/logos/dark-logo.png
/* harmony default export */ const dark_logo = ({"src":"/_next/static/media/dark-logo.c61780e5.png","height":424,"width":424,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+ElEQVR42h3PS0rDQBwG8G/GzMTUVAlSDVGxBVGC2IUgEl17BO+Qg3gHcwuXdelGgkVx4aPgSiTqpjRQX+0wM3+H/g7wPRic236cBgEVnNtMawOt/ZIxkwMYsP5Nkgbz+rr6kNHjQ4Lu3gRx/AZrgxqwx1wKKrTRUe9iR/XONnB1uY+v71XF+TQCeMEZjItdwJLfkt0TD5vtbUzHB5JoBMDLuCVACEKn7cG8/yIMCY3FPxDBIXBgzg36we7RnWquK9RVBa/x4ioAp+REIieLGkbK5U4Lw5GH8euhJJXUJCY5g/M8WEnvz9Pi86mZGd9gbRiWW6fh7OY/aCtkb2IT2a4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/logos/light-logo.png
/* harmony default export */ const light_logo = ({"src":"/_next/static/media/light-logo.8f15daa4.png","height":424,"width":424,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+ElEQVR42h3PS0rDQBwG8G/GzMTUVAlSDVGxBVGC2IUgEl17BO+Qg3gHcwuXdelGgkVx4aPgSiTqpjRQX+0wM3+H/g7wPRic236cBgEVnNtMawOt/ZIxkwMYsP5Nkgbz+rr6kNHjQ4Lu3gRx/AZrgxqwx1wKKrTRUe9iR/XONnB1uY+v71XF+TQCeMEZjItdwJLfkt0TD5vtbUzHB5JoBMDLuCVACEKn7cG8/yIMCY3FPxDBIXBgzg36we7RnWquK9RVBa/x4ioAp+REIieLGkbK5U4Lw5GH8euhJJXUJCY5g/M8WEnvz9Pi86mZGd9gbRiWW6fh7OY/aCtkb2IT2a4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: external "@mui/icons-material/DarkMode"
var DarkMode_ = __webpack_require__(5262);
var DarkMode_default = /*#__PURE__*/__webpack_require__.n(DarkMode_);
// EXTERNAL MODULE: external "@mui/icons-material/LightMode"
var LightMode_ = __webpack_require__(3684);
var LightMode_default = /*#__PURE__*/__webpack_require__.n(LightMode_);
// EXTERNAL MODULE: external "@mui/icons-material/Close"
var Close_ = __webpack_require__(4173);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
;// CONCATENATED MODULE: ./components/Header.tsx
// React


// Next


// Assets



// Packages

// Icons



const Header = ()=>{
    // Theme Variable (Dark or Light)
    const { systemTheme , theme , setTheme  } = (0,external_next_themes_.useTheme)();
    const currentTheme = theme === "system" ? systemTheme : theme;
    // Is Menu Open or Not (True of False)
    const [isMenuOpen, setIsMenuOpen] = (0,external_react_.useState)(false);
    const [isDarkMode, setIsDarkMode] = (0,external_react_.useState)(theme === "dark");
    // Toggle Theme
    const toggleTheme = ()=>{
        theme === "dark" ? setTheme("light") : setTheme("dark");
        setIsDarkMode(!isDarkMode);
    };
    // Nav Bar Links
    const navLinks = [
        {
            title: "home",
            link: "/#home"
        },
        {
            title: "about",
            link: "/#about"
        },
        {
            title: "skills",
            link: "/#skills"
        },
        {
            title: "gallery",
            link: "/#gallery"
        },
        {
            title: "contact me",
            link: "/#contactme"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: "h-[75px] md:h-[100px] duration-300 shadow-lg dark:shadow-lightSlateGray shadow-gainsboro relative z-10",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container mx-auto flex justify-between items-center h-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo h-[50px]",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "/",
                                className: "h-[50px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: dark_logo,
                                        height: 50,
                                        alt: "El-Black Logo",
                                        className: "select-none hidden dark:block"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: light_logo,
                                        height: 50,
                                        alt: "El-Black Logo",
                                        className: "select-none dark:hidden block"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                            className: "hidden items-center gap-5 h-full md:flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "flex m-0 px-5 items-center gap-8 capitalize h-full",
                                    children: navLinks.map((item, index)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: item.link,
                                            className: "text-lightSlateGray hover:text-amber dark:text-gainsboro dark:hover:text-blue h-full before:h-[3px] before:w-0 before:duration-300 hover:before:w-full before:absolute before:bg-amber dark:before:bg-blue before:bottom-0 relative flex flex-col justify-center items-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "duration-300 text-lg",
                                                children: item.title
                                            })
                                        }, index);
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "switcher w-[100px] h-[50px] rounded-full bg-eerieBlack dark:bg-cultured duration-300 relative cursor-pointer",
                                    onClick: toggleTheme,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "ball w-[40px] h-[40px] absolute top-[50%] translate-y-[-50%] dark:bg-eerieBlack bg-cultured rounded-full flex justify-center items-center duration-500 dark:left-[55px] left-[5px]",
                                        children: isDarkMode ? /*#__PURE__*/ jsx_runtime_.jsx((LightMode_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((DarkMode_default()), {})
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu-icon md:hidden cursor-pointer select-none",
                            onClick: ()=>setIsMenuOpen(true),
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                                fontSize: "large"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `menu fixed top-0 left-0 w-[250px] bg-cultured dark:bg-eerieBlack h-screen z-[999] duration-300 flex flex-col gap-5 ${isMenuOpen ? "translate-x-0" : "translate-x-[-100%]"}`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "top flex justify-between items-center p-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo h-[50px]",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: "/",
                                        className: "h-[50px]",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: dark_logo,
                                                height: 50,
                                                alt: "El-Black Logo",
                                                className: "select-none hidden dark:block"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: light_logo,
                                                height: 50,
                                                alt: "El-Black Logo",
                                                className: "select-none dark:hidden block"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "close-icon rounded-full w-[35px] h-[35px] shadow-sm shadow-dimGray dark:shadow-white flex justify-center items-center cursor-pointer select-none",
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                        fontSize: "medium"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "flex flex-col m-0 px-5 gap-3 capitalize",
                            children: navLinks.map((item, index)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: item.link,
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-lightSlateGray hover:text-amber dark:text-gainsboro dark:hover:text-blue duration-300 text-lg",
                                        children: item.title
                                    })
                                }, index);
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "bottom w-full py-5 flex justify-center items-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "switcher w-[100px] h-[50px] rounded-full bg-eerieBlack dark:bg-cultured duration-300 relative cursor-pointer",
                                onClick: toggleTheme,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "ball w-[40px] h-[40px] absolute top-[50%] translate-y-[-50%] dark:bg-eerieBlack bg-cultured rounded-full flex justify-center items-center duration-500 dark:left-[55px] left-[5px]",
                                    children: isDarkMode ? /*#__PURE__*/ jsx_runtime_.jsx((LightMode_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((DarkMode_default()), {})
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `overlay bg-eerieBlack dark:bg-cultured w-screen h-screen top-0 fixed left-0 opacity-25 duration-300 z-[899] ${isMenuOpen ? "" : "hidden"}`,
                    onClick: ()=>setIsMenuOpen(false)
                })
            ]
        })
    });
};
/* harmony default export */ const components_Header = (Header);


/***/ })

};
;