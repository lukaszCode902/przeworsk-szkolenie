# przeworsk-szkolenie - jak dodać zmiany do repozytorium.


# 1 - Sprawdzenie statusu: git status - takiej komendy używamy żeby sprawdzić status
# 2 - Dodanie zmian to tkzw "stage": git add <nazwa_pliku_który_chcemy_wrzucić> - takiej komendy używamy
# 3 - Stworzenie commita (czyli paczki ze zmianami, która pojawi się na zdalnym repozytorium - github): git commit -m "nazwa_zmian_jakie_zrobiliśmy_w_ramach_paczki"
# 4 - Wyrzucenie zmian /gotowego commita na zdalne repozytorium github - git push origin (nazwa_brancha - main) - git push origin main..


# Stworzenie nowego brancha i przechodzenie pomiędzy 

# 0 - Nową gałąż najlepiej tworzyć z głównej gałężi upewniając się, że pobraliśmy z tej gałęzi najnowsze zmiany komendą git pull main<nazwa_glownej_galezi_jesli_jest_inna>

# 1 - Stworzenie i automatycznie przejście na brancha: git checkout -b "nazwa_brancha" - Wykonując tą komendę, tworzę i automatycznie przechodzę na daną gałąż na której rozpoczynam pracę.

# 2 - Wypchnięcie brancha na repozytorium zdalnie: git push origin <nazwa_brancha> - Wcześniej jednak należy upewnić się że dodaliśmy plikim, zrobiliśmy git add ., git commit -m, i dopiero push z branchem.


zmiana z brancha Learning