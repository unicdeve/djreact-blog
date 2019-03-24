from rest_framework import serializers

from articles.models import Article

class ArticleSerializer(serializers.ModelSerializer):
  class Meta:
    model = Article
    fields = ('name', 'content')
    verbose_name = 'Article'
    verbose_name_plural = 'Articles'