window["distri/sandbox:v0.2.2"]({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "mode": "100644",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "content": "sandbox\n=======\n\nRun code in a popup window filled with sand.\n",
      "mode": "100644",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "content": "Sandbox\n=======\n\nSandbox creates a popup window in which you can run code.\n\nYou can pass in a width and a height to set the size of the window.\n\n    module.exports = ({name, width, height, methods}={}) ->\n      name ?= \"sandbox\" + new Date\n      width ?= 800\n      height ?= 600\n      methods ?= {}\n\n      sandbox = window.open(\n        \"\"\n        name\n        \"width=#{width},height=#{height}\"\n      )\n\nPass in functions to attach to the running window. Useful for things like\n`onerror` or other utilities if you would like the running code to be able to\ncommunicate back to the parent.\n\n      extend sandbox, methods\n\n      autoClose(sandbox)\n\nThe newly created window is returned.\n\n      return sandbox\n\nHelpers\n-------\n\n    extend = (target, sources...) ->\n      for source in sources\n        for name of source\n          target[name] = source[name]\n\n      return target\n\nClose sandbox when closing our window.\n\n    autoClose = (sandbox) ->\n      closer = ->\n        window.removeEventListener \"unload\", closer\n        widget.close()\n\n      sandbox.addEventListener \"unload\", closer\n      window.addEventListener \"unload\", closer\n",
      "mode": "100644",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "content": "version: \"0.2.2\"\n",
      "mode": "100644",
      "type": "blob"
    },
    "test/sandbox.coffee": {
      "path": "test/sandbox.coffee",
      "content": "Sandbox = require \"../main\"\n\ndescribe \"sandbox\", ->\n  it \"should be able to open a window\", ->\n    sandbox = Sandbox()\n\n    assert sandbox\n\n    assert sandbox != window, \"Popup should not be this window\"\n\n    sandbox.close()\n",
      "mode": "100644",
      "type": "blob"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  var autoClose, extend,\n    __slice = [].slice;\n\n  module.exports = function(_arg) {\n    var height, methods, name, sandbox, width, _ref;\n    _ref = _arg != null ? _arg : {}, name = _ref.name, width = _ref.width, height = _ref.height, methods = _ref.methods;\n    if (name == null) {\n      name = \"sandbox\" + new Date;\n    }\n    if (width == null) {\n      width = 800;\n    }\n    if (height == null) {\n      height = 600;\n    }\n    if (methods == null) {\n      methods = {};\n    }\n    sandbox = window.open(\"\", name, \"width=\" + width + \",height=\" + height);\n    extend(sandbox, methods);\n    autoClose(sandbox);\n    return sandbox;\n  };\n\n  extend = function() {\n    var name, source, sources, target, _i, _len;\n    target = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];\n    for (_i = 0, _len = sources.length; _i < _len; _i++) {\n      source = sources[_i];\n      for (name in source) {\n        target[name] = source[name];\n      }\n    }\n    return target;\n  };\n\n  autoClose = function(sandbox) {\n    var closer;\n    closer = function() {\n      window.removeEventListener(\"unload\", closer);\n      return widget.close();\n    };\n    sandbox.addEventListener(\"unload\", closer);\n    return window.addEventListener(\"unload\", closer);\n  };\n\n}).call(this);\n",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.2.2\"};",
      "type": "blob"
    },
    "test/sandbox": {
      "path": "test/sandbox",
      "content": "(function() {\n  var Sandbox;\n\n  Sandbox = require(\"../main\");\n\n  describe(\"sandbox\", function() {\n    return it(\"should be able to open a window\", function() {\n      var sandbox;\n      sandbox = Sandbox();\n      assert(sandbox);\n      assert(sandbox !== window, \"Popup should not be this window\");\n      return sandbox.close();\n    });\n  });\n\n}).call(this);\n",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://www.danielx.net/editor/"
  },
  "version": "0.2.2",
  "entryPoint": "main",
  "repository": {
    "id": 12746310,
    "name": "sandbox",
    "full_name": "distri/sandbox",
    "owner": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://avatars.githubusercontent.com/u/6005125?",
      "gravatar_id": "192f3f168409e79c42107f081139d9f3",
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/distri/sandbox",
    "description": "Run code in a popup window filled with sand.",
    "fork": false,
    "url": "https://api.github.com/repos/distri/sandbox",
    "forks_url": "https://api.github.com/repos/distri/sandbox/forks",
    "keys_url": "https://api.github.com/repos/distri/sandbox/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/distri/sandbox/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/distri/sandbox/teams",
    "hooks_url": "https://api.github.com/repos/distri/sandbox/hooks",
    "issue_events_url": "https://api.github.com/repos/distri/sandbox/issues/events{/number}",
    "events_url": "https://api.github.com/repos/distri/sandbox/events",
    "assignees_url": "https://api.github.com/repos/distri/sandbox/assignees{/user}",
    "branches_url": "https://api.github.com/repos/distri/sandbox/branches{/branch}",
    "tags_url": "https://api.github.com/repos/distri/sandbox/tags",
    "blobs_url": "https://api.github.com/repos/distri/sandbox/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/distri/sandbox/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/distri/sandbox/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/distri/sandbox/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/distri/sandbox/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/distri/sandbox/languages",
    "stargazers_url": "https://api.github.com/repos/distri/sandbox/stargazers",
    "contributors_url": "https://api.github.com/repos/distri/sandbox/contributors",
    "subscribers_url": "https://api.github.com/repos/distri/sandbox/subscribers",
    "subscription_url": "https://api.github.com/repos/distri/sandbox/subscription",
    "commits_url": "https://api.github.com/repos/distri/sandbox/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/distri/sandbox/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/distri/sandbox/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/distri/sandbox/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/distri/sandbox/contents/{+path}",
    "compare_url": "https://api.github.com/repos/distri/sandbox/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/distri/sandbox/merges",
    "archive_url": "https://api.github.com/repos/distri/sandbox/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/distri/sandbox/downloads",
    "issues_url": "https://api.github.com/repos/distri/sandbox/issues{/number}",
    "pulls_url": "https://api.github.com/repos/distri/sandbox/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/distri/sandbox/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/distri/sandbox/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/distri/sandbox/labels{/name}",
    "releases_url": "https://api.github.com/repos/distri/sandbox/releases{/id}",
    "created_at": "2013-09-11T03:03:50Z",
    "updated_at": "2014-04-05T17:00:56Z",
    "pushed_at": "2014-04-05T17:00:56Z",
    "git_url": "git://github.com/distri/sandbox.git",
    "ssh_url": "git@github.com:distri/sandbox.git",
    "clone_url": "https://github.com/distri/sandbox.git",
    "svn_url": "https://github.com/distri/sandbox",
    "homepage": null,
    "size": 284,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "CoffeeScript",
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "organization": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://avatars.githubusercontent.com/u/6005125?",
      "gravatar_id": "192f3f168409e79c42107f081139d9f3",
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "network_count": 0,
    "subscribers_count": 1,
    "branch": "v0.2.2",
    "publishBranch": "gh-pages"
  },
  "dependencies": {}
});