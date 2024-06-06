# Layout System
여러 페이지에서 동일하게 사용되는 요소들을 적용시킬 때 사용한다. 그러려면 Nextjs 가 실제로 페이지를 렌더링 하는 과정을 조금 더 자세히 이해해야함.

1. layout 컴포넌트를 먼저 render 하고
2. url 을 확인하여, 그 url 에 맞는 컴포넌트를 렌더링 하는 과정을 거친다.

즉 `<Layout><AboutUs/><Layout>` 이런 형태.

### 특정 영역만을 위한 Layout
적절한 위치에 layout file 을 만든다! 그러면, 해당 위치 기준으로 하위 depth 에는 동일한 layout 적용됨.

그리고, **layouts get nested!**

```
<RootLayout>
    <AboutUsLayout>
        <SalesLayout>
            <Sales/>
        </SalesLayout>
    </AboutUsLayout>
</RootLayout>
```