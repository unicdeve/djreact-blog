from rest_framework import serializers

from articles.models import Article

class ArticleSerializer(serializers.ModelSerializer):
  class class Meta:
    model = Article
    fields = ('title', 'content')
    verbose_name = 'Article'
    verbose_name_plural = 'Articles'