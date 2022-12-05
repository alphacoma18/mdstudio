import { FSSchema } from "../../../../../utils/db/account";
export const project1: FSSchema = {
	_isDir: true,
	_files: {
		file_1: {
			_isDir: false,
			_content: "Hello World",
			_title: "Hello World",
			_description: "This is a test file",
		},
	},
	_folders: {
		public: {
			_isDir: true,
			_files: {},
			_folders: {},
		},
		private: {
			_isDir: true,
			_files: {},
			_folders: {},
		},
		src: {
			_isDir: true,
			_files: {
				file_2: {
					_isDir: false,
					_content: "This is file 2",
					_title: "File 2",
					_description: "This is file 2",
				},
			},
			_folders: {
				pages: {
					_isDir: true,
					_files: {
						file_3: {
							_isDir: false,
							_content: "This is file 3",
							_title: "File 3",
							_description: "This is file 3",
						},
					},
					_folders: {
						api: {
							_isDir: true,
							_files: {
								file_5: {
									_isDir: false,
									_content: "This is file 5",
								},
								file_6: {
									_isDir: false,
									_content: "This is file 6",
								},
								file_7: {
									_isDir: false,
									_content: "This is file 7",
								},
							},
							_folders: {
								index: {
									_isDir: true,
									_folders: {},
									_files: {
										file_a: {
											_isDir: false,
											_content: "This is file a",
										},
										file_b: {
											_isDir: false,
											_content: "This is file b",
										},
										file_c: {
											_isDir: false,
											_content: "This is file c",
										},
										file_d: {
											_isDir: false,
											_content: "This is file d",
										},
										file_e: {
											_isDir: false,
											_content: "This is file e",
										},
										file_f: {
											_isDir: false,
											_content: "This is file f",
										},
										file_g: {
											_isDir: false,
											_content: "This is file g",
										},
										file_h: {
											_isDir: false,
											_content: "This is file h",
										},
										file_i: {
											_isDir: false,
											_content: "This is file i",
										},
										file_j: {
											_isDir: false,
											_content: "This is file j",
										},
										file_k: {
											_isDir: false,
											_content: "This is file k",
										},
										file_l: {
											_isDir: false,
											_content: "This is file l",
										},
										file_m: {
											_isDir: false,
											_content: "This is file m",
										},
										file_n: {
											_isDir: false,
											_content: "This is file n",
										},
										file_o: {
											_isDir: false,
											_content: "This is file o",
										},
									},
								},
							},
						},
						types: {
							_isDir: true,
							_folders: {
								index: {
									_isDir: true,
									_files: {
										file_8: {
											_isDir: false,
											_content: "console.log('Hello World!');",
										},
									},
								},
							},
							_files: {
								file_9: {
									_isDir: false,
									_content: "This is file 9",
								},
								file_10: {
									_isDir: false,
									_content: "This is file 10",
								},
								file_11: {
									_isDir: false,
									_content: "This is file 11",
								},
								file_12: {
									_isDir: false,
									_content: "This is file 12",
								},
								file_13: {
									_isDir: false,
									_content: "This is file 13",
								},
								file_14: {
									_isDir: false,
									_content: "This is file 14",
								},
							},
						},
					},
				},
				react: {
					_isDir: true,
					_folders: {},
					_files: {
						file_15: {
							_isDir: false,
							_content: "This is file 15",
						},
						file_16: {
							_isDir: false,
							_content: "This is file 16",
						},
						file_17: {
							_isDir: false,
							_content: "This is file 17",
						},
					},
				},
			},
		},
		styles: {
			_isDir: true,
			_files: {
				file_18: {
					_isDir: false,
					_content: `
# [AnyMD: Markdown Publisher](https://anymd.vercel.app)

## What is AnyMD?

AnyMD is a simple yet modern and extensive cross-platform markdown publisher and publishing application. Featuring your most beloved features such as...

- 🌒 Awesome Dark mode / Night Mode feature
- ✍️ Integrated Spell Checker
- 😍 Beautiful and Modern UI
- 💪 Cross-Platform Installation Support
- ☕️ Automatic Syntax Highlighting
- 👀 Extensive View Modes such as...
  - 📝 Edit Mode
  - 📖 Preview Mode
  - 📄 Split Mode
  - 📚 Read Mode
  - 🖥️ Full-Screen Mode
- And SO Much More!

## Why would you use this?

Perhaps you want to write a blog post, or a personal or promotional webpage, or maybe you just want to write something on the go (without an account/anonymously) that you will use for a presentation or project later. AnyMD is built specially with purpose and extensibility in mind, and is designed to be as simple as possible to use, while still being powerful enough to be used for any purpose.

## How do I use it?

AnyMD offers a built-in markdown tool bar that allows you to easily format your text, and grammarly support for grammar and spelling checks. You can also use the built-in keyboard shortcuts to format your text and switch between view modes. AnyMD also offers a built-in file manager that allows you to easily create, open, save, and delete multiple files if logged in.

## Planned Future Features

- [x] ~~Support for HTML~~
- [x] ~~Several Secure Login Methods~~
- [ ] Local Autosave Feature
- [ ] Multi-Language Support
- [ ] Collaborative Editing using web sockets
- [ ] Downloadable and Shareable Content
- [ ] Customizable Themes
- [ ] Extensive Settings Menu
- [ ] Commenting and Discussion Feature

## Contributors

AnyMD is a free and open source project, open for contributions and collaborations.

1. Alpha Romer N. Coma
`,
				},
			},
			_folders: {},
		},
	},
};
