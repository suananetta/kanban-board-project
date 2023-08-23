<h2>Проект "Канбан-доска"</h2>

<p>Канбан-доска в соответствии с <a href='https://www.figma.com/file/gmwg0Me1T6szwVqd7KSYL6/Kanban'>макетом</a> (предоставлен школой SkillFactory по курсу Frontend-разработка)</p>
<a href='https://suananetta.github.io/kanban-board-project/'>Попробовать</a>

<h2>Используемый стек:</h2>
<ul>
<li>HTML5,</li>
<li>CSS3,</li>
<li>JS,</li>
<li>React, React-router-dom</li>
</ul>

<h3>Функциональность:</h3>

<h4>Исходное состояние:</h4>

Исходная Канбан-доска имеет 4 блока с задачами:

- Backlog (задачи, которые требуют уточнения перед тем, как брать их в работу);
- Ready (задачи, которые могут быть взяты в работу);
- In progress (задачи, которые уже в работе);
- Finished (законченные задачи).

<h4>1. Добавление новой задачи</h4>
<p>Первоначально каждая задача всегда размещается в бэклоге — для анализа. При клике на кнопку «+ Add task» в карточке Backlog появляется поле ввода в конце списка, между последней задачей и кнопкой. При этом кнопка «+ Add task» меняется на «Submit».</p>

<h5>Алгоритм добавления задачи:</h5>  
→ нажали кнопку «+ Add task»<br>
→ появилось поле для редактирования <br>
→ ввели название <br>
→ нажали кнопку «Submit» — задача появилась в бэклоге.

<h4>2. Перемещение задач между списками</h4>
<p>Задачи для списка Ready берутся из Backlog. При клике на «+ Add task» в карточке Ready, в конце списка появляется дропдаун с задачами из списка Backlog. После клика на задачу из дропдауна она появляется в списке Ready последней, при этом эта задача удаляется из Backlog.</p>
<p>Если Backlog пустой (в списке нет задач), то кнопка «+ Add task» в списке Ready неактивна. Активная и неактивная кнопки отличаются визуально.</p>
<p>Остальные списки (In progress и Finished) работают по тому же принципу.</p>

<h4>3. Удаление задач</h4>
<p>Каждая задача имеет кнопку (красный крестик у правого края блока задачи), при нажатии на которую задача будет удалена.</p>

<h4>4. Детальная страница задачи</h4>
<p>Осуществлена возможность перехода на отдельную страницу какой-либо задачи в списке при клике на её заголовок.</p>
<p>Страница с задачей имеет:</p>

- URL, отличный от того, который используется для главной страницы,
- название задачи и её описание. Если описания нет, выводится фраза "This task has no description",
- возможность редактировать детали задачи: заголовок, статус, описание,
- возможность удалить задачу,
- при клике на крестик в правом верхнем углу осуществляется переход обратно на главную страницу без сохранения изменений.

<h4>5. Сохранение внесенных изменений</h4>
<p>Любые изменения, внесенные в приложение (добавление новых задач, перемещение задач между списками, изменение описания задачи), сохраняются в localStorage.</p>
<p>При загрузке приложения отображаются задачи, записанные в localStorage (или пустые списки, если в localStorage ничего нет). Если внести изменения и обновить страницу, то изменения сохраняются.</p>

<h4>6. Вывод количества задач в футер</h4>
В футере выводится количество активных(Backlog) и завершенных задач(Finished).

<h4>7. Выпадающее меню пользователя</h4>
<p>Реализован выпадающий список, который будет появляться при клике на блок в правом верхнем углу страницы — аватар пользователя со стрелкой.</p>
<p>При клике на пункты меню ничего не происходит, но добавлено выделение пунктов при наведении курсора.</p>

