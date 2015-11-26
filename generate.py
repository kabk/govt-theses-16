#!/usr/bin/env python
# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from urllib2 import urlopen
from codecs import open
import json
import re

res = urlopen("https://api.github.com/search/repositories?q=govt-theses-16+in:name+user:kabk")

repos = json.load(res)

thesis_template = """
<div class="preview">
    <h2><a href="{url}">{slug}</a></h2>
</div>
"""

thesis_links = ""
for thesis in repos['items']:
    thesis_links += thesis_template.format(
                                  url='http://kabk.github.io/%s/' % thesis['name'],
                                  slug=thesis['name'])

print thesis_links
