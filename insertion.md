## **Insertion Sort**

Proje 1

## **[22,27,16,2,18,6]**

- Yukarıda verilen dizinin insertion sort türüne göre aşamalarını yazınız.

```
2,27,16,22,18,6  ->  n
2,6,16,22,18,27  ->  n-1
2,6,16,18,22,27  ->  n-2
```

- Big-O gösterimini yazınız.

```
n^2 (n*(n+1)/2) dominant olan n^2 olduğu için, O(n) = n^2
```

- Time Complexity: Average case: Aradığımız sayının ortada olması, Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.

```
Average case için Big-O notation O(n^2)
Worst case için Big-O notation O(n^2)
Best case için Big-O notation O(n)
```

- Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.

```
18 sayısı, average case kapsamındadır. En iyi ya da en kötü senaryo değildir.
```

## **[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.**

```
[2,3,5,8,7,9,4,15,6]
[2,3,4,8,7,9,5,15,6]
[2,3,4,5,7,9,8,15,6]
[2,3,4,5,6,9,8,15,7]
```