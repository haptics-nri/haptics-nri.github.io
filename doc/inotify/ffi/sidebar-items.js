initSidebarItems({"struct":[["inotify_event","Describes an event."]],"constant":[["IN_ACCESS","Event: File was accessed."],["IN_ALL_EVENTS","Event: Any event occured."],["IN_ATTRIB","Event: Metadata has changed."],["IN_CLOEXEC","Flag: Set the FD_CLOEXEC flag"],["IN_CLOSE","Event: File opened was closed."],["IN_CLOSE_NOWRITE","Event: File not opened for writing was closed."],["IN_CLOSE_WRITE","Event: File opened for writing was closed."],["IN_CREATE","Event: File or directory was created."],["IN_DELETE","Event: File or directory was deleted."],["IN_DELETE_SELF","Event: Watched file or directory was deleted."],["IN_DONT_FOLLOW","Option: Don't dereference (if self is a symlink)."],["IN_EXCL_UNLINK","Option: Don't watch unlinked children."],["IN_IGNORED","Info: Watch was removed."],["IN_ISDIR","Info: Subject of this event is a directory."],["IN_MASK_ADD","Option: Add events to an existing watch instead of replacing it."],["IN_MODIFY",""],["IN_MOVE","Event: File or directory was moved away or in."],["IN_MOVED_FROM","Event: File or directory was moved away."],["IN_MOVED_TO","Event: File or directory was moved in."],["IN_MOVE_SELF","Event: Watched file or directory was moved."],["IN_NONBLOCK","Flag: Set the O_NONBLOCK file status flag"],["IN_ONESHOT","Option: Listen for one event, then remove the watch."],["IN_ONLYDIR","Option: Don't watch children (if self is a directory)."],["IN_OPEN","Event: File was opened."],["IN_Q_OVERFLOW","Info: Event queue overflowed."],["IN_UNMOUNT","Info: Filesystem containing self was unmounted."]],"fn":[["close",""],["inotify_add_watch","Manipulates the \"watch list\" associated with an inotify instance."],["inotify_init","Creates an inotify instance."],["inotify_init1","Creates an inotify instance."],["inotify_rm_watch","Removes an item from an inotify watch list."],["read",""]]});