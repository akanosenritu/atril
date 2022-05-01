import {NextPage} from "next"
import {Box, Typography} from "@mui/material"
import {Layout} from "../../components/layout/layout"
import {DisplayVerb, DisplayVerbIndefiniteForm} from "../../components/models/dictionary/words/DisplayVerb"
import {VerbType, WordType} from "../../models/word"

const wordData = [{
  "pos": "verb",
  "head_templates": [{
    "name": "es-verb",
    "args": {},
    "expansion": "acabar (first-person singular present acabo, first-person singular preterite acabé, past participle acabado)"
  }],
  "forms": [{"form": "acabo", "tags": ["first-person", "present", "singular"]}, {
    "form": "acabé",
    "tags": ["first-person", "preterite", "singular"]
  }, {"form": "acabado", "tags": ["participle", "past"]}, {
    "form": "",
    "source": "Conjugation",
    "tags": ["table-tags"]
  }, {"form": "acabar", "tags": ["infinitive"], "source": "Conjugation"}, {
    "form": "acabando",
    "tags": ["gerund"],
    "source": "Conjugation"
  }, {
    "form": "acabado",
    "tags": ["masculine", "participle", "past", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acabada",
    "tags": ["feminine", "participle", "past", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acabados",
    "tags": ["masculine", "participle", "past", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabadas",
    "tags": ["feminine", "participle", "past", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabo",
    "tags": ["first-person", "indicative", "present", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acabas",
    "tags": ["indicative", "informal", "present", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acabás",
    "tags": ["indicative", "informal", "present", "second-person", "singular", "vos-form"],
    "source": "Conjugation"
  }, {
    "form": "acaba",
    "tags": ["indicative", "present", "singular", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabamos",
    "tags": ["first-person", "indicative", "plural", "present"],
    "source": "Conjugation"
  }, {
    "form": "acabáis",
    "tags": ["indicative", "plural", "present", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acaban",
    "tags": ["indicative", "plural", "present", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acababa",
    "tags": ["first-person", "imperfect", "indicative", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acababas",
    "tags": ["imperfect", "indicative", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acababa",
    "tags": ["imperfect", "indicative", "singular", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabábamos",
    "tags": ["first-person", "imperfect", "indicative", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acababais",
    "tags": ["imperfect", "indicative", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acababan",
    "tags": ["imperfect", "indicative", "plural", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabé",
    "tags": ["first-person", "indicative", "preterite", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acabaste",
    "tags": ["indicative", "preterite", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acabó",
    "tags": ["indicative", "preterite", "singular", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabamos",
    "tags": ["first-person", "indicative", "plural", "preterite"],
    "source": "Conjugation"
  }, {
    "form": "acabasteis",
    "tags": ["indicative", "plural", "preterite", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabaron",
    "tags": ["indicative", "plural", "preterite", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabaré",
    "tags": ["first-person", "future", "indicative", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acabarás",
    "tags": ["future", "indicative", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acabará",
    "tags": ["future", "indicative", "singular", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabaremos",
    "tags": ["first-person", "future", "indicative", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabaréis",
    "tags": ["future", "indicative", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabarán",
    "tags": ["future", "indicative", "plural", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabaría",
    "tags": ["conditional", "first-person", "indicative", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acabarías",
    "tags": ["conditional", "indicative", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acabaría",
    "tags": ["conditional", "indicative", "singular", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabaríamos",
    "tags": ["conditional", "first-person", "indicative", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabaríais",
    "tags": ["conditional", "indicative", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabarían",
    "tags": ["conditional", "indicative", "plural", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabe",
    "tags": ["first-person", "present", "singular", "subjunctive"],
    "source": "Conjugation"
  }, {
    "form": "acabes",
    "tags": ["informal", "present", "second-person", "singular", "subjunctive"],
    "source": "Conjugation"
  }, {
    "form": "acabés",
    "tags": ["informal", "present", "second-person", "singular", "subjunctive", "vos-form"],
    "source": "Conjugation"
  }, {
    "form": "acabe",
    "tags": ["present", "singular", "subjunctive", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabemos",
    "tags": ["first-person", "plural", "present", "subjunctive"],
    "source": "Conjugation"
  }, {
    "form": "acabéis",
    "tags": ["plural", "present", "second-person", "subjunctive"],
    "source": "Conjugation"
  }, {
    "form": "acaben",
    "tags": ["plural", "present", "subjunctive", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabara",
    "tags": ["first-person", "imperfect", "singular", "subjunctive"],
    "source": "Conjugation"
  }, {
    "form": "acabaras",
    "tags": ["imperfect", "second-person", "singular", "subjunctive"],
    "source": "Conjugation"
  }, {
    "form": "acabara",
    "tags": ["imperfect", "singular", "subjunctive", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabáramos",
    "tags": ["first-person", "imperfect", "plural", "subjunctive"],
    "source": "Conjugation"
  }, {
    "form": "acabarais",
    "tags": ["imperfect", "plural", "second-person", "subjunctive"],
    "source": "Conjugation"
  }, {
    "form": "acabaran",
    "tags": ["imperfect", "plural", "subjunctive", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabase",
    "tags": ["first-person", "imperfect", "imperfect-se", "singular", "subjunctive"],
    "source": "Conjugation"
  }, {
    "form": "acabases",
    "tags": ["imperfect", "imperfect-se", "second-person", "singular", "subjunctive"],
    "source": "Conjugation"
  }, {
    "form": "acabase",
    "tags": ["imperfect", "imperfect-se", "singular", "subjunctive", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabásemos",
    "tags": ["first-person", "imperfect", "imperfect-se", "plural", "subjunctive"],
    "source": "Conjugation"
  }, {
    "form": "acabaseis",
    "tags": ["imperfect", "imperfect-se", "plural", "second-person", "subjunctive"],
    "source": "Conjugation"
  }, {
    "form": "acabasen",
    "tags": ["imperfect", "imperfect-se", "plural", "subjunctive", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabare",
    "tags": ["first-person", "future", "singular", "subjunctive"],
    "source": "Conjugation"
  }, {
    "form": "acabares",
    "tags": ["future", "second-person", "singular", "subjunctive"],
    "source": "Conjugation"
  }, {
    "form": "acabare",
    "tags": ["future", "singular", "subjunctive", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabáremos",
    "tags": ["first-person", "future", "plural", "subjunctive"],
    "source": "Conjugation"
  }, {
    "form": "acabareis",
    "tags": ["future", "plural", "second-person", "subjunctive"],
    "source": "Conjugation"
  }, {
    "form": "acabaren",
    "tags": ["future", "plural", "subjunctive", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acaba",
    "tags": ["imperative", "informal", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acabá",
    "tags": ["imperative", "informal", "second-person", "singular", "vos-form"],
    "source": "Conjugation"
  }, {
    "form": "acabe",
    "tags": ["formal", "imperative", "second-person-semantically", "singular", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabe",
    "tags": ["imperative", "singular", "third-person"],
    "source": "Conjugation"
  }, {"form": "acabemos", "tags": ["first-person", "imperative", "plural"], "source": "Conjugation"}, {
    "form": "acabad",
    "tags": ["imperative", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acaben",
    "tags": ["formal", "imperative", "plural", "second-person-semantically", "third-person"],
    "source": "Conjugation"
  }, {"form": "acaben", "tags": ["imperative", "plural", "third-person"], "source": "Conjugation"}, {
    "form": "acabes",
    "tags": ["imperative", "negative", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acabe",
    "tags": ["formal", "imperative", "negative", "second-person-semantically", "singular", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabe",
    "tags": ["imperative", "negative", "singular", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabemos",
    "tags": ["first-person", "imperative", "negative", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabéis",
    "tags": ["imperative", "negative", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acaben",
    "tags": ["formal", "imperative", "negative", "plural", "second-person-semantically", "third-person"],
    "source": "Conjugation"
  }, {
    "form": "acaben",
    "tags": ["imperative", "negative", "plural", "third-person"],
    "source": "Conjugation"
  }, {"form": "", "source": "Conjugation", "tags": ["table-tags"]}, {
    "form": "acabarme",
    "tags": ["combined-form", "dative", "infinitive", "object-first-person", "object-singular"],
    "source": "Conjugation"
  }, {
    "form": "acabarte",
    "tags": ["combined-form", "dative", "infinitive", "object-second-person", "object-singular"],
    "source": "Conjugation"
  }, {
    "form": "acabarle",
    "tags": ["combined-form", "dative", "infinitive", "object-singular", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabarse",
    "tags": ["combined-form", "dative", "infinitive", "object-singular", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabarnos",
    "tags": ["combined-form", "dative", "infinitive", "object-first-person", "object-plural"],
    "source": "Conjugation"
  }, {
    "form": "acabaros",
    "tags": ["combined-form", "dative", "infinitive", "object-plural", "object-second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabarles",
    "tags": ["combined-form", "dative", "infinitive", "object-plural", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabarse",
    "tags": ["combined-form", "dative", "infinitive", "object-plural", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabarme",
    "tags": ["accusative", "combined-form", "infinitive", "object-first-person", "object-singular"],
    "source": "Conjugation"
  }, {
    "form": "acabarte",
    "tags": ["accusative", "combined-form", "infinitive", "object-second-person", "object-singular"],
    "source": "Conjugation"
  }, {
    "form": "acabarlo",
    "tags": ["accusative", "combined-form", "infinitive", "object-singular", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabarla",
    "tags": ["accusative", "combined-form", "infinitive", "object-singular", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabarse",
    "tags": ["accusative", "combined-form", "infinitive", "object-singular", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabarnos",
    "tags": ["accusative", "combined-form", "infinitive", "object-first-person", "object-plural"],
    "source": "Conjugation"
  }, {
    "form": "acabaros",
    "tags": ["accusative", "combined-form", "infinitive", "object-plural", "object-second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabarlos",
    "tags": ["accusative", "combined-form", "infinitive", "object-plural", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabarlas",
    "tags": ["accusative", "combined-form", "infinitive", "object-plural", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabarse",
    "tags": ["accusative", "combined-form", "infinitive", "object-plural", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabándome",
    "tags": ["combined-form", "dative", "gerund", "object-first-person", "object-singular"],
    "source": "Conjugation"
  }, {
    "form": "acabándote",
    "tags": ["combined-form", "dative", "gerund", "object-second-person", "object-singular"],
    "source": "Conjugation"
  }, {
    "form": "acabándole",
    "tags": ["combined-form", "dative", "gerund", "object-singular", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabándose",
    "tags": ["combined-form", "dative", "gerund", "object-singular", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabándonos",
    "tags": ["combined-form", "dative", "gerund", "object-first-person", "object-plural"],
    "source": "Conjugation"
  }, {
    "form": "acabándoos",
    "tags": ["combined-form", "dative", "gerund", "object-plural", "object-second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabándoles",
    "tags": ["combined-form", "dative", "gerund", "object-plural", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabándose",
    "tags": ["combined-form", "dative", "gerund", "object-plural", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabándome",
    "tags": ["accusative", "combined-form", "gerund", "object-first-person", "object-singular"],
    "source": "Conjugation"
  }, {
    "form": "acabándote",
    "tags": ["accusative", "combined-form", "gerund", "object-second-person", "object-singular"],
    "source": "Conjugation"
  }, {
    "form": "acabándolo",
    "tags": ["accusative", "combined-form", "gerund", "object-singular", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabándola",
    "tags": ["accusative", "combined-form", "gerund", "object-singular", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabándose",
    "tags": ["accusative", "combined-form", "gerund", "object-singular", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabándonos",
    "tags": ["accusative", "combined-form", "gerund", "object-first-person", "object-plural"],
    "source": "Conjugation"
  }, {
    "form": "acabándoos",
    "tags": ["accusative", "combined-form", "gerund", "object-plural", "object-second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabándolos",
    "tags": ["accusative", "combined-form", "gerund", "object-plural", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabándolas",
    "tags": ["accusative", "combined-form", "gerund", "object-plural", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acabándose",
    "tags": ["accusative", "combined-form", "gerund", "object-plural", "object-third-person"],
    "source": "Conjugation"
  }, {
    "form": "acábame",
    "tags": ["combined-form", "dative", "imperative", "informal", "object-first-person", "object-singular", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábate",
    "tags": ["combined-form", "dative", "imperative", "informal", "object-second-person", "object-singular", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábale",
    "tags": ["combined-form", "dative", "imperative", "informal", "object-singular", "object-third-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábanos",
    "tags": ["combined-form", "dative", "imperative", "informal", "object-first-person", "object-plural", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "-",
    "tags": ["combined-form", "dative", "imperative", "informal", "object-plural", "object-second-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábales",
    "tags": ["combined-form", "dative", "imperative", "informal", "object-plural", "object-third-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábame",
    "tags": ["accusative", "combined-form", "imperative", "informal", "object-first-person", "object-singular", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábate",
    "tags": ["accusative", "combined-form", "imperative", "informal", "object-second-person", "object-singular", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábalo",
    "tags": ["accusative", "combined-form", "imperative", "informal", "object-singular", "object-third-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábala",
    "tags": ["accusative", "combined-form", "imperative", "informal", "object-singular", "object-third-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábanos",
    "tags": ["accusative", "combined-form", "imperative", "informal", "object-first-person", "object-plural", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "-",
    "tags": ["accusative", "combined-form", "imperative", "informal", "object-plural", "object-second-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábalos",
    "tags": ["accusative", "combined-form", "imperative", "informal", "object-plural", "object-third-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábalas",
    "tags": ["accusative", "combined-form", "imperative", "informal", "object-plural", "object-third-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábeme",
    "tags": ["combined-form", "dative", "formal", "imperative", "object-first-person", "object-singular", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "-",
    "tags": ["combined-form", "dative", "formal", "imperative", "object-second-person", "object-singular", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábele",
    "tags": ["combined-form", "dative", "formal", "imperative", "object-singular", "object-third-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábese",
    "tags": ["combined-form", "dative", "formal", "imperative", "object-singular", "object-third-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábenos",
    "tags": ["combined-form", "dative", "formal", "imperative", "object-first-person", "object-plural", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "-",
    "tags": ["combined-form", "dative", "formal", "imperative", "object-plural", "object-second-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábeles",
    "tags": ["combined-form", "dative", "formal", "imperative", "object-plural", "object-third-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábeme",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-first-person", "object-singular", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "-",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-second-person", "object-singular", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábelo",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-singular", "object-third-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábela",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-singular", "object-third-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábese",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-singular", "object-third-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábenos",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-first-person", "object-plural", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "-",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-plural", "object-second-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábelos",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-plural", "object-third-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "acábelas",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-plural", "object-third-person", "second-person", "singular"],
    "source": "Conjugation"
  }, {
    "form": "-",
    "tags": ["combined-form", "dative", "first-person", "imperative", "object-first-person", "object-singular", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabémoste",
    "tags": ["combined-form", "dative", "first-person", "imperative", "object-second-person", "object-singular", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabémosle",
    "tags": ["combined-form", "dative", "first-person", "imperative", "object-singular", "object-third-person", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabémonos",
    "tags": ["combined-form", "dative", "first-person", "imperative", "object-first-person", "object-plural", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabémoos",
    "tags": ["combined-form", "dative", "first-person", "imperative", "object-plural", "object-second-person", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabémosles",
    "tags": ["combined-form", "dative", "first-person", "imperative", "object-plural", "object-third-person", "plural"],
    "source": "Conjugation"
  }, {
    "form": "-",
    "tags": ["accusative", "combined-form", "first-person", "imperative", "object-first-person", "object-singular", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabémoste",
    "tags": ["accusative", "combined-form", "first-person", "imperative", "object-second-person", "object-singular", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabémoslo",
    "tags": ["accusative", "combined-form", "first-person", "imperative", "object-singular", "object-third-person", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabémosla",
    "tags": ["accusative", "combined-form", "first-person", "imperative", "object-singular", "object-third-person", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabémonos",
    "tags": ["accusative", "combined-form", "first-person", "imperative", "object-first-person", "object-plural", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabémoos",
    "tags": ["accusative", "combined-form", "first-person", "imperative", "object-plural", "object-second-person", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabémoslos",
    "tags": ["accusative", "combined-form", "first-person", "imperative", "object-plural", "object-third-person", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabémoslas",
    "tags": ["accusative", "combined-form", "first-person", "imperative", "object-plural", "object-third-person", "plural"],
    "source": "Conjugation"
  }, {
    "form": "acabadme",
    "tags": ["combined-form", "dative", "imperative", "informal", "object-first-person", "object-singular", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "-",
    "tags": ["combined-form", "dative", "imperative", "informal", "object-second-person", "object-singular", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabadle",
    "tags": ["combined-form", "dative", "imperative", "informal", "object-singular", "object-third-person", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabadnos",
    "tags": ["combined-form", "dative", "imperative", "informal", "object-first-person", "object-plural", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabaos",
    "tags": ["combined-form", "dative", "imperative", "informal", "object-plural", "object-second-person", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabadles",
    "tags": ["combined-form", "dative", "imperative", "informal", "object-plural", "object-third-person", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabadme",
    "tags": ["accusative", "combined-form", "imperative", "informal", "object-first-person", "object-singular", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "-",
    "tags": ["accusative", "combined-form", "imperative", "informal", "object-second-person", "object-singular", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabadlo",
    "tags": ["accusative", "combined-form", "imperative", "informal", "object-singular", "object-third-person", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabadla",
    "tags": ["accusative", "combined-form", "imperative", "informal", "object-singular", "object-third-person", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabadnos",
    "tags": ["accusative", "combined-form", "imperative", "informal", "object-first-person", "object-plural", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabaos",
    "tags": ["accusative", "combined-form", "imperative", "informal", "object-plural", "object-second-person", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabadlos",
    "tags": ["accusative", "combined-form", "imperative", "informal", "object-plural", "object-third-person", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acabadlas",
    "tags": ["accusative", "combined-form", "imperative", "informal", "object-plural", "object-third-person", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acábenme",
    "tags": ["combined-form", "dative", "formal", "imperative", "object-first-person", "object-singular", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "-",
    "tags": ["combined-form", "dative", "formal", "imperative", "object-second-person", "object-singular", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acábenle",
    "tags": ["combined-form", "dative", "formal", "imperative", "object-singular", "object-third-person", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acábennos",
    "tags": ["combined-form", "dative", "formal", "imperative", "object-first-person", "object-plural", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "-",
    "tags": ["combined-form", "dative", "formal", "imperative", "object-plural", "object-second-person", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acábenles",
    "tags": ["combined-form", "dative", "formal", "imperative", "object-plural", "object-third-person", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acábense",
    "tags": ["combined-form", "dative", "formal", "imperative", "object-plural", "object-third-person", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acábenme",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-first-person", "object-singular", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "-",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-second-person", "object-singular", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acábenlo",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-singular", "object-third-person", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acábenla",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-singular", "object-third-person", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acábennos",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-first-person", "object-plural", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "-",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-plural", "object-second-person", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acábenlos",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-plural", "object-third-person", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acábenlas",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-plural", "object-third-person", "plural", "second-person"],
    "source": "Conjugation"
  }, {
    "form": "acábense",
    "tags": ["accusative", "combined-form", "formal", "imperative", "object-plural", "object-third-person", "plural", "second-person"],
    "source": "Conjugation"
  }],
  "inflection_templates": [{"name": "es-conj", "args": {}}],
  "etymology_text": "From the noun cabo (“end, edge”), from Latin caput, or through a Vulgar Latin root *accapāre. Compare English achieve.",
  "etymology_templates": [{
    "name": "m",
    "args": {"1": "es", "2": "cabo", "t": "end, edge"},
    "expansion": "cabo (“end, edge”)"
  }, {"name": "inh", "args": {"1": "es", "2": "la", "3": "caput"}, "expansion": "Latin caput"}, {
    "name": "inh",
    "args": {"1": "es", "2": "VL.", "3": "-"},
    "expansion": "Vulgar Latin"
  }, {"name": "m", "args": {"1": "la", "2": "*accapāre"}, "expansion": "*accapāre"}, {
    "name": "cog",
    "args": {"1": "en", "2": "achieve"},
    "expansion": "English achieve"
  }],
  "sounds": [{"ipa": "/akaˈbaɾ/"}, {"ipa": "[a.kaˈβ̞aɾ]"}],
  "word": "acabar",
  "lang": "Spanish",
  "lang_code": "es",
  "senses": [{
    "raw_glosses": ["(transitive) to finish; to end"],
    "synonyms": [{"word": "terminar"}, {"word": "finalizar"}, {"word": "rematar"}],
    "tags": ["transitive"],
    "glosses": ["to finish; to end"],
    "id": "acabar-es-verb-99yslN4q",
    "categories": [{
      "name": "Spanish verbs ending in -ar",
      "kind": "other",
      "parents": [],
      "source": "w+disamb",
      "_dis": "36 21 13 16 13"
    }]
  }, {
    "raw_glosses": ["(auxiliary with a verb in the gerund) to end up (to eventually do)"],
    "examples": [{
      "text": "Acabarás haciendo lo que él diga.",
      "english": "You'll end up doing what he says.",
      "type": "example"
    }],
    "tags": ["auxiliary", "with a verb in the gerund"],
    "glosses": ["to end up (to eventually do)"],
    "id": "acabar-es-verb-jojoLuyj",
    "categories": []
  }, {
    "raw_glosses": ["(takes a reflexive pronoun) to run out of"],
    "examples": [{"text": "Se me acabó la paciencia.", "english": "I've run out of patience.", "type": "example"}],
    "tags": ["takes a reflexive pronoun"],
    "glosses": ["to run out of"],
    "id": "acabar-es-verb-YKdnZQfy",
    "categories": []
  }, {
    "raw_glosses": ["(takes a reflexive pronoun) to come to an end, to be over, to be done, to be finished, to be it, to be no more, to be up"],
    "examples": [{
      "text": "Lo siento. Su tiempo se acabó, señor.",
      "english": "I am sorry. Your time is up, sir.",
      "type": "example"
    }],
    "tags": ["takes a reflexive pronoun"],
    "glosses": ["to come to an end, to be over, to be done, to be finished, to be it, to be no more, to be up"],
    "id": "acabar-es-verb-.fmeLBF6",
    "categories": []
  }, {
    "raw_glosses": ["(Latin America, vulgar, slang) to orgasm; to cum"],
    "tags": ["Latin-America", "slang", "vulgar"],
    "glosses": ["to orgasm; to cum"],
    "id": "acabar-es-verb-a.R9ZOcO",
    "categories": [{"name": "Latin American Spanish", "kind": "other", "parents": [], "source": "w"}]
  }]
}, {
  "pos": "verb",
  "head_templates": [{"name": "head", "args": {"1": "es", "2": "verb form"}, "expansion": "acaba"}],
  "word": "acaba",
  "lang": "Spanish",
  "lang_code": "es",
  "sounds": [{"ipa": "/a\u02c8kaba/"}, {"ipa": "[a\u02c8ka.\u03b2\u031ea]"}],
  "categories": [],
  "senses": [{
    "raw_glosses": ["Third-person singular (\u00e9l, ella, also used with usted) present indicative form of acabar."],
    "glosses": ["Third-person singular (\u00e9l, ella, also used with usted) present indicative form of acabar."],
    "tags": ["form-of", "indicative", "present", "singular", "third-person", "with-ella", "with-usted", "with-\u00e9l"],
    "form_of": [{"word": "acabar"}],
    "id": "acaba-es-verb-GckFYaYt",
    "categories": []
  }, {
    "raw_glosses": ["Formal second-person singular (usted) present indicative form of acabar."],
    "glosses": ["Formal second-person singular (usted) present indicative form of acabar."],
    "tags": ["form-of", "formal", "indicative", "present", "second-person", "singular", "with-usted"],
    "form_of": [{"word": "acabar"}],
    "id": "acaba-es-verb-FkkgwZOS",
    "categories": []
  }, {
    "raw_glosses": ["Informal second-person singular (t\u00fa) affirmative imperative form of acabar."],
    "glosses": ["Informal second-person singular (t\u00fa) affirmative imperative form of acabar."],
    "tags": ["affirmative", "form-of", "imperative", "informal", "second-person", "singular", "with-t\u00fa"],
    "form_of": [{"word": "acabar"}],
    "id": "acaba-es-verb-6dXOLyFV",
    "categories": []
  }]
}]

const Page: NextPage = () => {
  const words = wordData as VerbType[]
  return <Layout>
    {words.map(word => <DisplayVerb key={word.word} verb={word}/>)}
  </Layout>
}

export default Page