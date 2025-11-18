document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const docCards = document.querySelectorAll('.doc-card');
    const title = document.getElementById('current-title');
    const searchInput = document.getElementById('search-input');

    // 1. 筛选逻辑
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // 移除所有active状态
            navItems.forEach(nav => nav.classList.remove('active'));
            // 激活当前点击的
            item.classList.add('active');
            
            const category = item.getAttribute('data-term');
            const categoryName = item.textContent;
            
            // 更新标题
            title.textContent = categoryName;

            // 过滤卡片
            docCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 2. 搜索逻辑
    searchInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        
        docCards.forEach(card => {
            const docTitle = card.querySelector('h3').textContent.toLowerCase();
            // 如果正在特定的分类下，还需要判断分类是否匹配（这里简单处理为全局搜索）
            if (docTitle.includes(searchText)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
        
        if(searchText !== "") {
            title.textContent = "搜索结果";
            // 移除左侧高亮
            navItems.forEach(nav => nav.classList.remove('active'));
        }
    });
});
