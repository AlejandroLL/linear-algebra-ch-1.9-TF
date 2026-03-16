window.QUIZ_SECTIONS = [
    {
        "id": "1.9",
        "title": "Section 1.9: Matrix Transformations",
        "questions": [
            {
                "q": "A linear transformation $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ is completely determined by its effect on the columns of the $n \\times n$ identity matrix.",
                "a": true,
                "j": "The columns of the identity matrix are the basis vectors $\\mathbf{e}_1, \\dots, \\mathbf{e}_n$. $T(\\mathbf{x}) = x_1 T(\\mathbf{e}_1) + \\dots + x_n T(\\mathbf{e}_n)$."
            },
            {
                "q": "A mapping $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ is one-to-one if each vector in $\\mathbb{R}^n$ maps onto a unique vector in $\\mathbb{R}^m$.",
                "a": false,
                "j": "For a mapping to be one-to-one, each vector in the CODOMAIN must be the image of AT MOST one vector in the domain."
            },
            {
                "q": "If $T: \\mathbb{R}^2 \\to \\mathbb{R}^2$ rotates vectors about the origin through an angle $\\phi$, then $T$ is a linear transformation.",
                "a": true,
                "j": "Rotation about the origin preserves vector addition and scalar multiplication."
            },
            {
                "q": "The columns of the standard matrix for a linear transformation from $\\mathbb{R}^n$ to $\\mathbb{R}^m$ are the images of the columns of the $n \\times n$ identity matrix.",
                "a": true,
                "j": "The standard matrix $A = [T(\\mathbf{e}_1) \\ T(\\mathbf{e}_2) \\ \\dots \\ T(\\mathbf{e}_n)]$."
            },
            {
                "q": "When two linear transformations are performed one after another, the combined effect may not always be a linear transformation.",
                "a": false,
                "j": "The composition of two linear transformations is always a linear transformation."
            },
            {
                "q": "Not every linear transformation from $\\mathbb{R}^n$ to $\\mathbb{R}^m$ is a matrix transformation.",
                "a": false,
                "j": "Every linear transformation from $\\mathbb{R}^n$ to $\\mathbb{R}^m$ can be represented by a unique $m \\times n$ standard matrix."
            },
            {
                "q": "A mapping $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ is onto $\\mathbb{R}^m$ if every vector $\\mathbf{x}$ in $\\mathbb{R}^n$ maps onto some vector in $\\mathbb{R}^m$.",
                "a": false,
                "j": "$T$ is ONTO if each $\\mathbf{b}$ in $\\mathbb{R}^m$ is the image of AT LEAST one $\\mathbf{x}$ in $\\mathbb{R}^n$."
            },
            {
                "q": "The standard matrix of a linear transformation from $\\mathbb{R}^2$ to $\\mathbb{R}^2$ that reflects points through the horizontal axis, the vertical axis, or the origin has the form $\\begin{bmatrix} a & 0 \\\\ 0 & d \\end{bmatrix}$, where $a$ and $d$ are $\\pm 1$.",
                "a": true,
                "j": "Reflection matrices have values of 1 or -1 on the diagonal and 0 elsewhere."
            },
            {
                "q": "If $A$ is a $3 \\times 2$ matrix, then the transformation $\\mathbf{x} \\mapsto A\\mathbf{x}$ cannot be one-to-one.",
                "a": false,
                "j": "A $3 \\times 2$ matrix is one-to-one if its columns are linearly independent."
            },
            {
                "q": "If $A$ is a $4 \\times 3$ matrix, then the transformation $\\mathbf{x} \\mapsto A\\mathbf{x}$ maps $\\mathbb{R}^3$ onto $\\mathbb{R}^4$.",
                "a": false,
                "j": "Since $A$ is $4 \\times 3$, it has at most 3 pivots, meaning there is at least one row without a pivot. Thus it cannot be onto $\\mathbb{R}^4$."
            }
        ]
    },
    {
        "id": "2.1",
        "title": "Section 2.1: Matrix Algebra",
        "questions": [
            {
                "q": "If $A$ and $B$ are $2 \\times 2$ with columns $\\mathbf{a}_1, \\mathbf{a}_2$ and $\\mathbf{b}_1, \\mathbf{b}_2$, respectively, then $AB = [\\mathbf{a}_1\\mathbf{b}_1 \\quad \\mathbf{a}_2\\mathbf{b}_2]$. ",
                "a": false,
                "j": "The columns of $AB$ are $A\\mathbf{b}_1$ and $A\\mathbf{b}_2$."
            },
            {
                "q": "If $A$ and $B$ are $3 \\times 3$ and $B = [\\mathbf{b}_1 \\quad \\mathbf{b}_2 \\quad \\mathbf{b}_3]$, then $AB = [A\\mathbf{b}_1 + A\\mathbf{b}_2 + A\\mathbf{b}_3]$.",
                "a": false,
                "j": "The expression in brackets denotes a single vector, whereas $AB$ is a $3 \\times 3$ matrix."
            },
            {
                "q": "Each column of $AB$ is a linear combination of the columns of $B$ using weights from the corresponding column of $A$.",
                "a": false,
                "j": "Each column of $AB$ is a linear combination of the columns of **$A$** using weights from the corresponding column of **$B$**."
            },
            {
                "q": "The second row of $AB$ is the second row of $A$ multiplied on the right by $B$.",
                "a": true,
                "j": "This is a fundamental row-column rule: $(\\text{row}_i A)B = \\text{row}_i(AB)$."
            },
            {
                "q": "$AB + AC = A(B + C)$",
                "a": true,
                "j": "This is the Left Distributive Law."
            },
            {
                "q": "$A^T + B^T = (A + B)^T$",
                "a": true,
                "j": "The transpose of a sum is the sum of transposes."
            },
            {
                "q": "$(AB)C = (AC)B$",
                "a": false,
                "j": "Matrix multiplication is associative $(AB)C = A(BC)$, but not commutative."
            },
            {
                "q": "$(AB)^T = A^T B^T$",
                "a": false,
                "j": "The property is $(AB)^T = B^T A^T$."
            },
            {
                "q": "The transpose of a product of matrices equals the product of their transposes in the same order.",
                "a": false,
                "j": "The order must be reversed: $(AB)^T = B^T A^T$."
            },
            {
                "q": "The transpose of a sum of matrices equals the sum of their transposes.",
                "a": true,
                "j": "Correct: $(A+B)^T = A^T + B^T$."
            }
        ]
    },
    {
        "id": "2.2",
        "title": "Section 2.2: Matrix Inverses",
        "questions": [
            {
                "q": "In order for a matrix $B$ to be the inverse of $A$, both equations $AB = I$ and $BA = I$ must be true.",
                "a": true,
                "j": "This is the definition of an inverse."
            },
            {
                "q": "A product of invertible $n \\times n$ matrices is invertible, and the inverse of the product is the product of their inverses in the same order.",
                "a": false,
                "j": "Order is reversed: $(AB)^{-1} = B^{-1}A^{-1}$."
            },
            {
                "q": "If $A$ and $B$ are $n \\times n$ and invertible, then $A^{-1}B^{-1}$ is the inverse of $AB$.",
                "a": false,
                "j": "False. $(AB)^{-1} = B^{-1}A^{-1}$."
            },
            {
                "q": "If $A$ is invertible, then the inverse of $A^{-1}$ is $A$ itself.",
                "a": true,
                "j": "Correct: $(A^{-1})^{-1} = A$."
            },
            {
                "q": "If $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ and $ab - cd \\neq 0$, then $A$ is invertible.",
                "a": false,
                "j": "Determinant is $ad - bc$."
            },
            {
                "q": "If $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ and $ad = bc$, then $A$ is not invertible.",
                "a": true,
                "j": "Means $\\text{det } A = 0$."
            },
            {
                "q": "If $A$ is an invertible $n \\times n$ matrix, then the equation $A\\mathbf{x} = \\mathbf{b}$ is consistent for each $\\mathbf{b}$ in $\\mathbb{R}^n$.",
                "a": true,
                "j": "$\\mathbf{x} = A^{-1}\\mathbf{b}$ is a solution for any $\\mathbf{b}$."
            },
            {
                "q": "If $A$ can be row reduced to the identity matrix, then $A$ must be invertible.",
                "a": true,
                "j": "By the IMT, row equivalence to $I$ implies invertibility for square matrices."
            },
            {
                "q": "Each elementary matrix is invertible.",
                "a": true,
                "j": "Every elementary row operation is reversible."
            },
            {
                "q": "If $A$ is invertible, then the elementary row operations that reduce $A$ to the identity $I_n$ also reduce $A^{-1}$ to $I_n$.",
                "a": false,
                "j": "Reducing $A$ to $I$ corresponds to multiplying by $A^{-1}$."
            }
        ]
    },
    {
        "id": "2.3",
        "title": "Section 2.3: Invertible Matrix Theorem",
        "questions": [
            {
                "q": "If the equation $A\\mathbf{x} = \\mathbf{0}$ has only the trivial solution, then $A$ is row equivalent to the $n \\times n$ identity matrix.",
                "a": true,
                "j": "IMT: trivial solution $\\iff$ $n$ pivots $\\iff$ row equivalent to $I_n$."
            },
            {
                "q": "If there is an $n \\times n$ matrix $D$ such that $AD = I$, then there is also an $n \\times n$ matrix $C$ such that $CA = I$.",
                "a": true,
                "j": "A square matrix with a right inverse is invertible and thus has a left inverse."
            },
            {
                "q": "If the columns of $A$ span $\\mathbb{R}^n$, then the columns are linearly independent.",
                "a": true,
                "j": "For $n \\times n$ matrices, spanning implies linear independence."
            },
            {
                "q": "If the columns of $A$ are linearly independent, then the columns of $A$ span $\\mathbb{R}^n$.",
                "a": true,
                "j": "IMT: linearly independent columns $\\iff$ columns span $\\mathbb{R}^n$ (for $n \\times n$)."
            },
            {
                "q": "If $A$ is an $n \\times n$ matrix, then the equation $A\\mathbf{x} = \\mathbf{b}$ has at least one solution for each $\\mathbf{b}$ in $\\mathbb{R}^n$.",
                "a": false,
                "j": "False if $A$ is not invertible (singular)."
            },
            {
                "q": "If the equation $A\\mathbf{x} = \\mathbf{b}$ has at least one solution for each $\\mathbf{b}$ in $\\mathbb{R}^n$, then the solution is unique for each $\\mathbf{b}$.",
                "a": true,
                "j": "Existence of solution for every $\\mathbf{b}$ $\\implies$ invertibility $\\implies$ uniqueness."
            },
            {
                "q": "If the equation $A\\mathbf{x} = \\mathbf{0}$ has a nontrivial solution, then $A$ has fewer than $n$ pivot positions.",
                "a": true,
                "j": "Nontrivial solution $\\implies$ free variable $\\implies < n$ pivots."
            },
            {
                "q": "If the linear transformation $\\mathbf{x} \\mapsto A\\mathbf{x}$ maps $\\mathbb{R}^n$ into $\\mathbb{R}^n$, then $A$ has $n$ pivot positions.",
                "a": false,
                "j": "Mapping *into* $\\mathbb{R}^n$ is just the definition of the map; it doesn't guarantee invertibility/full pivots."
            },
            {
                "q": "If $A^T$ is not invertible, then $A$ is not invertible.",
                "a": true,
                "j": "$A$ is invertible iff $A^T$ is invertible."
            },
            {
                "q": "If there is a $\\mathbf{b}$ in $\\mathbb{R}^n$ such that the equation $A\\mathbf{x} = \\mathbf{b}$ is inconsistent, then the transformation $\\mathbf{x} \\mapsto A\\mathbf{x}$ is not one-to-one.",
                "a": true,
                "j": "Inconsistent for some $\\mathbf{b}$ $\\implies$ not onto $\\implies$ not invertible $\\implies$ not one-to-one."
            }
        ]
    },
    {
        "id": "3.1",
        "title": "Section 3.1: Intro to Determinants",
        "questions": [
            {
                "q": "An $n \\times n$ determinant is defined by determinants of $(n-1) \\times (n-1)$ submatrices.",
                "a": true,
                "j": "This is the inductive/recursive definition of the determinant using cofactor expansion."
            },
            {
                "q": "The $(i, j)$-cofactor of a matrix $A$ is the matrix $A_{ij}$ obtained by deleting from $A$ its $i$th row and $j$th column.",
                "a": false,
                "j": "The matrix $A_{ij}$ is the **minor**. The cofactor $C_{ij}$ is a **scalar** defined as $(-1)^{i+j} \\det A_{ij}$."
            },
            {
                "q": "The cofactor expansion of $\\det A$ down a column is equal to the cofactor expansion along a row.",
                "a": true,
                "j": "Expanding along any row or column gives the same result. For example, in $\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$, Row 1 expansion gives $1(4) - 2(3) = -2$, and Col 1 expansion gives $1(4) - 3(2) = -2$."
            },
            {
                "q": "The determinant of a triangular matrix is the sum of the entries on the main diagonal.",
                "a": false,
                "j": "The determinant of a triangular matrix is the **product** of the entries on the main diagonal."
            }
        ]
    },
    {
        "id": "3.2",
        "title": "Section 3.2: Properties of Determinants",
        "questions": [
            {
                "q": "A row replacement operation does not affect the determinant of a matrix.",
                "a": true,
                "j": "Theorem: If a multiple of one row of $A$ is added to another row to produce $B$, then $\\det B = \\det A$."
            },
            {
                "q": "If $\\det A$ is zero, then two rows or two columns are the same, or a row or a column is zero.",
                "a": false,
                "j": "While these conditions lead to a zero determinant, they are not the *only* way. For example, a row could be a linear combination of other rows without being identical to any one of them."
            },
            {
                "q": "If the columns of $A$ are linearly dependent, then $\\det A = 0$.",
                "a": true,
                "j": "A matrix is invertible if and only if $\\det A \\neq 0$. Linearly dependent columns mean the matrix is not invertible, so $\\det A = 0$."
            },
            {
                "q": "The determinant of $A$ is the product of the diagonal entries in $A$.",
                "a": false,
                "j": "This is only true if $A$ is a **triangular** matrix. For a general matrix, it is false."
            },
            {
                "q": "If three row interchanges are made in succession, then the new determinant equals the old determinant.",
                "a": false,
                "j": "Each interchange multiplies the determinant by $-1$. Three interchanges results in $(-1)^3 = -1$, so the new determinant is the negative of the old one."
            },
            {
                "q": "The determinant of $A$ is the product of the pivots in any echelon form $U$ of $A$, multiplied by $(-1)^r$, where $r$ is the number of row interchanges made during row reduction from $A$ to $U$.",
                "a": true,
                "j": "Since row replacements don't change the determinant and interchanges only flip the sign, $\\det A = (-1)^r \\det U$. For echelon form $U$, the determinant is the product of its diagonal entries (pivots)."
            },
            {
                "q": "$\\det(A + B) = \\det A + \\det B$",
                "a": false,
                "j": "The determinant is NOT a linear operator with respect to matrix addition. Generally, $\\det(A+B) \\neq \\det A + \\det B$."
            },
            {
                "q": "$\\det A^{-1} = (-1) \\det A$.",
                "a": false,
                "j": "The correct property is $\\det A^{-1} = 1 / \\det A$."
            }
        ]
    },
    {
        "id": "3.3",
        "title": "Section 3.3: Cramer's Rule & Volume",
        "questions": [
            {
                "q": "Two parallelograms with the same base and height have the same area.",
                "a": true,
                "j": "Area = base $\\times$ height."
            }
        ]
    },
    {
        "id": "4.1",
        "title": "Section 4.1: Vector Spaces & Subspaces",
        "questions": [
            {
                "q": "A subset $H$ of a vector space $V$ is a subspace of $V$ if the zero vector is in $H$.",
                "a": false,
                "j": "Containment of the zero vector is necessary but not sufficient; $H$ must also be closed under addition and scalar multiplication."
            },
            {
                "q": "$\\mathbb{R}^2$ is a subspace of $\\mathbb{R}^3$.",
                "a": false,
                "j": "Ordered pairs are not ordered triples. A plane through the origin in $\\mathbb{R}^3$ is *isomorphic* to $\\mathbb{R}^2$, but is not actually $\\mathbb{R}^2$."
            }
        ]
    },
    {
        "id": "4.2",
        "title": "Section 4.2: Null, Column & Row Spaces",
        "questions": [
            {
                "q": "The null space of $A$ is the solution set of the equation $A\\mathbf{x} = \\mathbf{0}$.",
                "a": true,
                "j": "This is the definition of $\\text{Nul } A$."
            },
            {
                "q": "A null space is a vector space.",
                "a": true,
                "j": "Theorem: The null space of an $m \\times n$ matrix is a subspace of $\\mathbb{R}^n$, making it a vector space."
            },
            {
                "q": "The null space of an $m \\times n$ matrix is in $\\mathbb{R}^m$.",
                "a": false,
                "j": "The null space is the set of solutions to $A\\mathbf{x} = \\mathbf{0}$. Since $A$ has $n$ columns, $\\mathbf{x}$ must be in $\\mathbb{R}^n$."
            },
            {
                "q": "The column space of an $m \\times n$ matrix is in $\\mathbb{R}^m$.",
                "a": true,
                "j": "The columns of $A$ each have $m$ entries, so their linear combinations are in $\\mathbb{R}^m$."
            },
            {
                "q": "The column space of $A$ is the range of the mapping $\\mathbf{x} \\mapsto A\\mathbf{x}$.",
                "a": true,
                "j": "The set of all $A\\mathbf{x}$ is precisely the set of all linear combinations of the columns of $A$."
            },
            {
                "q": "$\\text{Col } A$ is the set of all solutions of $A\\mathbf{x} = \\mathbf{b}$.",
                "a": false,
                "j": "The solution set of $A\\mathbf{x} = \\mathbf{b}$ is a single set of vectors for a *specific* $\\mathbf{b}$. $\\text{Col } A$ is the set of all $\\mathbf{b}$ for which a solution *exists*."
            },
            {
                "q": "If the equation $A\\mathbf{x} = \\mathbf{b}$ is consistent, then $\\text{Col } A = \\mathbb{R}^m$.",
                "a": false,
                "j": "Consistency for a *specific* $\\mathbf{b}$ only means that $\\mathbf{b}$ is in $\\text{Col } A$. It does not mean *every* $\\mathbf{b}$ is in $\\text{Col } A$."
            },
            {
                "q": "$\\text{Nul } A$ is the kernel of the mapping $\\mathbf{x} \\mapsto A\\mathbf{x}$.",
                "a": true,
                "j": "By definition, the kernel is the set of all vectors that map to the zero vector."
            },
            {
                "q": "The kernel of a linear transformation is a vector space.",
                "a": true,
                "j": "The kernel is a subspace of the domain, and every subspace is a vector space."
            },
            {
                "q": "The range of a linear transformation is a vector space.",
                "a": true,
                "j": "The range is a subspace of the codomain, making it a vector space."
            },
            {
                "q": "$\\text{Col } A$ is the set of all vectors that can be written as $A\\mathbf{x}$ for some $\\mathbf{x}$.",
                "a": true,
                "j": "This is another way of defining the span of the columns of $A$."
            },
            {
                "q": "The set of all solutions of a homogeneous linear differential equation is the kernel of a linear transformation.",
                "a": true,
                "j": "Differential operators (like $d/dt$) are linear transformations; solutions to $L(y)=0$ form the kernel."
            },
            {
                "q": "The row space of $A$ is the same as the column space of $A^T$.",
                "a": true,
                "j": "The rows of $A$ are the columns of $A^T$."
            },
            {
                "q": "The null space of $A$ is the same as the row space of $A^T$.",
                "a": false,
                "j": "$\\text{Nul } A$ and $\\text{Row } A^T$ (which is $\\text{Col } A$) are generally different spaces."
            }
        ],
        "badge": "Exercises 25-38",
        "highlight": "emerald"
    }
];
