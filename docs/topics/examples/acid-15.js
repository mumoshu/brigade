const { events, Job, Group } = require("libacid")

events.on("exec", (e, p) => {
  var dest = "/mnt/acid/share/hello.txt"
  var one = new Job("one", "alpine:3.4", ["echo hello > " + dest])
  var two = new Job("two", "alpine:3.4", ["echo world >> " + dest])
  var three = new Job("three", "alpine:3.4", ["cat " + dest])

  Group.runEach([one, two, three])
})
