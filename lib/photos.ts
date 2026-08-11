/**
 * The YOCED field archive.
 *
 * Every image here is an original photograph from YOCED project work, supplied by
 * the organisation. Captions describe only what is visible in the frame — no
 * outcomes, counts or dates are claimed anywhere in this file.
 *
 * Sources are stored as pre-optimised WebP under /public/field and served through
 * next/image. `blurDataURL` holds a 20px LQIP generated at build-prep time.
 */

export type Photo = {
  slug: string;
  src: string;
  width: number;
  height: number;
  /** Literal description of the frame, for screen readers. */
  alt: string;
  /** Editorial caption shown alongside the image. */
  caption: string;
  tags: string[];
  blurDataURL: string;
};

export const photos: Photo[] = [
  {
    slug: "field-preparation",
    src: "/field/field-preparation.webp",
    width: 1600,
    height: 720,
    alt: "A newly ploughed field with a work team spread along the far edge",
    caption: "A field opened at the start of the season, with the planting team working along the far edge.",
    tags: ["land", "labour", "season-start"],
    blurDataURL:
      "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAwCdASoUAAkAPulgqE0pJaQiMAgBIB0JZQCw7B6V9ZL/9qwxZAAA/pG+KT8PY2nyP4DQbJtBnUPk4b0YVGAcQZqGsOjhMugAAA==",
  },
  {
    slug: "ploughing",
    src: "/field/ploughing.webp",
    width: 1600,
    height: 720,
    alt: "A red tractor pulling a disc plough through dark soil",
    caption: "Mechanised ploughing ahead of planting.",
    tags: ["mechanisation", "land"],
    blurDataURL:
      "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADwAwCdASoUAAkAPulep00pJSOiMAgBIB0JQBOmUI4AAvcgGLwjclmAAP6ZNTTFq9fXCiUCjOejH2QgkdPW5a/FJ+1YTspfMwaAKKCBcPIheTem0LcVmVJOY+cAAA==",
  },
  {
    slug: "tractor-and-hand",
    src: "/field/tractor-and-hand.webp",
    width: 1600,
    height: 720,
    alt: "A tractor ploughing while two people shape the headland with hoes",
    caption: "Mechanised and hand land preparation running side by side on the same plot.",
    tags: ["mechanisation", "labour", "land"],
    blurDataURL:
      "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAADQAwCdASoUAAkAPulgqE0pJaOiMAgBIB0JQBOmUABp8qTO+8vzowAAy027SdLfw/2rAlCchl7//jNvfQcDKpz1+0wpRDiMQ3ble9AJO4BBJ0E42Zxg5l35aoMtQAAA",
  },
  {
    slug: "tractor-field-edge",
    src: "/field/tractor-field-edge.webp",
    width: 1600,
    height: 720,
    alt: "A tractor with a mounted plough parked at the edge of a fenced field beside maize",
    caption: "A tractor and mounted plough at the boundary of a field being brought into production.",
    tags: ["mechanisation", "land"],
    blurDataURL:
      "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAACwAwCdASoUAAkAPulgqU2pJaQiMAgBIB0JYgCsACIFBB+PEXj5AAD945seDLufN81WF36n7QjMKMAgaBCIUogEKwyFeKSlI2OXzBM4qx9m9JElAbvqODSLDSKYmPif/M2AAA==",
  },
  {
    slug: "machinery-yard",
    src: "/field/machinery-yard.webp",
    width: 1600,
    height: 720,
    alt: "A long line of tractors and farm implements parked along a dirt road",
    caption: "Tractors and implements staged at a mechanisation yard — the equipment layer smallholder farms rarely reach on their own.",
    tags: ["mechanisation", "infrastructure"],
    blurDataURL:
      "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAACwAwCdASoUAAkAPulgqE0pJaOiMAgBIB0JQBdgBDtSdcjx24aGAAD9470brYOwRwn9v3+4Wcr8+uPWzo9huWm7CUOXhG4hLouSoP3TWdtXpPubf3V86rZay8w0YgAA",
  },
  {
    slug: "opening-furrows",
    src: "/field/opening-furrows.webp",
    width: 720,
    height: 1600,
    alt: "A person in a high-visibility vest opening a furrow with a hoe",
    caption: "Opening furrows by hand where the machine cannot reach.",
    tags: ["labour", "land"],
    blurDataURL:
      "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAACwAwCdASoJABQAPulgqE0pJaQiMAgBIB0JQBWAA+WjhHgjPg1RhAD94jt84vXRIlwp1CyKzdcHqmf21xNPXNpwfAeEKREbKMJ8FJMWE5vkaiea924b6XDNpnT5fM//WO1jBwAA",
  },
  {
    slug: "planting-ridges",
    src: "/field/planting-ridges.webp",
    width: 1600,
    height: 720,
    alt: "Four people planting along freshly opened ridges in dark soil",
    caption: "Planting along freshly opened ridges.",
    tags: ["labour", "planting"],
    blurDataURL:
      "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADwAwCdASoUAAkAPulgqE2pJaOiMAgBIB0JQBOmUI4ABWEkIwnzhwAAAP67MI3rPLSmD3PMAeEqDvjXaXPPepmMrssFFZOJtNIG5x8DtkF6HFkXGYO0s7ZATQAAAA==",
  },
  {
    slug: "seed-in-hand",
    src: "/field/seed-in-hand.webp",
    width: 1600,
    height: 720,
    alt: "An open hand holding pale seed above a ploughed field with a planting team behind",
    caption: "Seed measured out by hand at the start of a planting pass.",
    tags: ["planting", "seed"],
    blurDataURL:
      "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADwAwCdASoUAAkAPulgqE0pJaOiMAgBIB0JYwCdAB4WYxBr8wN1Q9QAAP4nWCImsM1S/gXsxrfRgm2+m5fzG3qWeYO0CHK2InqdsncTx/h6LVo6gAA=",
  },
  {
    slug: "maize-seed",
    src: "/field/maize-seed.webp",
    width: 720,
    height: 1600,
    alt: "A hand holding white maize seed, with people planting in the field behind",
    caption: "Maize seed at planting.",
    tags: ["planting", "seed", "maize"],
    blurDataURL:
      "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAAAwBACdASoJABQAPulep00pJSOiMAgBIB0JQBOmUABWJ+1PEoYUXUcpIgAA/jON6S0r+YzjERfNm9bnO/Iqq9ioUuX0AwAp8mi1mW9Lkc+Qde5aE+Tca9bIN1MFZdJH4hW+gX/NpWZMtMAA",
  },
  {
    slug: "maize-field",
    src: "/field/maize-field.webp",
    width: 720,
    height: 1600,
    alt: "A young maize crop in rows with a large tree on the horizon",
    caption: "A maize crop early in the season.",
    tags: ["maize", "crop"],
    blurDataURL:
      "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADQAwCdASoJABQAPulgqU2pJaQiMAgBIB0JQBdgBDxCewYBztypdAAA/u13m6Hzle+21t62ANZhlUPkaq8jHVWM3Eh09nxks2VhxxOYmiegAA==",
  },
  {
    slug: "weeding-team",
    src: "/field/weeding-team.webp",
    width: 1600,
    height: 720,
    alt: "Seven people bent over weeding a young crop across a wide field",
    caption: "A work team weeding a young crop — the labour peak that decides whether a season pays.",
    tags: ["labour", "jobs", "crop"],
    blurDataURL:
      "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAADwAwCdASoUAAkAPulgqU2pJaQiMAgBIB0JYwCdMoACJK+4SxUZteAAAPJTQ8xcxqcnFn7IOqNF9bnuXVx6IoyNmiNUNwbOLYWruTRGbXYLhy/e4ZR13D6TKEgX4AAA",
  },
  {
    slug: "groundnut-rows",
    src: "/field/groundnut-rows.webp",
    width: 1600,
    height: 720,
    alt: "Rows of young groundnut plants in dark soil",
    caption: "Groundnuts a few weeks after emergence.",
    tags: ["groundnut", "crop"],
    blurDataURL:
      "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAABwAwCdASoUAAkAPulgqE0pJaOiMAgBIB0JQBdgBDh4/TMkFzYA3IhZ6LdXbQcFAB1OPAUn945iZ09hHXFzPyf+YnH+Ua0+1vsdnCVitOKEuA9f7MgAAA==",
  },
  {
    slug: "groundnut-field",
    src: "/field/groundnut-field.webp",
    width: 1040,
    height: 468,
    alt: "A dense green groundnut crop stretching to a treeline",
    caption: "A groundnut crop in full leaf.",
    tags: ["groundnut", "crop"],
    blurDataURL:
      "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAACQAwCdASoUAAkAPulgqE0pJaQiMAgBIB0JQBWAA9CeXN19LvgAAN5m0me510fPxHRSiOuktG+kFQqNJeWUBe9YlSRO7+wrC58hKQRAkrmp+nYTVFICIOp/hHfgAA==",
  },
  {
    slug: "groundnut-lifted",
    src: "/field/groundnut-lifted.webp",
    width: 1600,
    height: 720,
    alt: "Groundnut plants pulled from the soil with pods still attached, harvesters working behind",
    caption: "Groundnut plants lifted with the pods still attached during harvest.",
    tags: ["groundnut", "harvest"],
    blurDataURL:
      "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADwAwCdASoUAAkAPuliqk2pJaQiMAgBIB0JQBOmUABp0gJF3zMHirmwAPxqSI8uy3Rt3yG7UkAOzdIU3EISXvBGXXJKAEwA1pXhkDdLdQAAAA==",
  },
  {
    slug: "groundnut-lifting",
    src: "/field/groundnut-lifting.webp",
    width: 720,
    height: 1600,
    alt: "Gloved hands emptying harvested groundnuts into a metal basin",
    caption: "Harvested groundnuts collected from the field.",
    tags: ["groundnut", "harvest"],
    blurDataURL:
      "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAQBACdASoJABQAPulgqE2pJaQiMAgBIB0JZQCdACPw4aAsQgkLMO9KAAD+hzm7/2I2wlcsleo7o1870hu4Ttwo5anuQ+C4pfrdChvR1FFYhzG7IDMZyhadnRjM/d1HNJG6o+muki6xiubpZh3AAA==",
  },
  {
    slug: "groundnut-harvest-drying",
    src: "/field/groundnut-harvest-drying.webp",
    width: 1600,
    height: 720,
    alt: "A large spread of groundnuts in their shells drying on a tarpaulin outdoors",
    caption: "Groundnuts in shell laid out to dry after harvest.",
    tags: ["groundnut", "post-harvest"],
    blurDataURL:
      "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAACwAwCdASoUAAkAPulgqE2pJaOiMAgBIB0JQBOmUABfWx5R733NeADMgxKHGmd1xBsgyVkmTEm4Y9vTAiQmTz5IRRCrf3eDmS4/CMG/CH77E11Uylt17eP93ZMKPYAA",
  },
  {
    slug: "groundnut-drying",
    src: "/field/groundnut-drying.webp",
    width: 720,
    height: 1600,
    alt: "Shelled red-skinned groundnuts spread across a tarpaulin with two people working",
    caption: "Shelled groundnuts spread out to dry.",
    tags: ["groundnut", "post-harvest"],
    blurDataURL:
      "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAABQAwCdASoJABQAPulgp00pJaOiMAgBIB0JQBdgA3Kk6/k6gADLLbe9QgxSrWXrfHSryHdU3lezZjDh/OoSoXQXZGB1byaDSkXNs1bZc1VK23BmjmFMvAAA",
  },
  {
    slug: "groundnut-sorting",
    src: "/field/groundnut-sorting.webp",
    width: 720,
    height: 1600,
    alt: "Red-skinned groundnut kernels being sorted between a metal pan and a plastic basin",
    caption: "Sorting shelled groundnuts by hand before drying and sale.",
    tags: ["groundnut", "post-harvest", "labour"],
    blurDataURL:
      "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAACQAwCdASoJABQAPulgqE0pJaQiMAgBIB0JagC7ABHWr6KW09YAAP49weMpeAtBAwDpkV8YMfooRzkE4dg/pOOe/HpZCP9KAIJymNbYmk0/fApdZvfRj69nEHVNIAAA",
  },
  {
    slug: "groundnut-peanut-butter",
    src: "/field/groundnut-peanut-butter.webp",
    width: 720,
    height: 1600,
    alt: "A hand holding a jar labelled Ndhiwa Peanut Butter, pure groundnuts, 250g, in front of open farmland",
    caption: "Groundnuts processed and jarred as peanut butter — the value-addition step that changes what a harvest is worth.",
    tags: ["groundnut", "value-addition", "product"],
    blurDataURL:
      "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAADwAwCdASoJABQAPulgqE0pJaQiMAgBIB0JZgCdACHStztxHZxQ6WxAAP7VFkuOPusIJ6bUKUlQd/ieMLLa6JDYJ5uMwwja4gCHTdFxIkwu3Fs+GMzoFK/a61OhrpCvM/z1Z+Qfd+NFStlj3M3k6AAA",
  },
  {
    slug: "crop-residue",
    src: "/field/crop-residue.webp",
    width: 1600,
    height: 720,
    alt: "A large stack of dried groundnut haulms on a tarpaulin with people working beside it",
    caption: "Crop residue stacked after threshing.",
    tags: ["post-harvest", "circular"],
    blurDataURL:
      "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADQAwCdASoUAAkAPulgqE0pJaOiMAgBIB0JZgCdACB5LXMIsi9AwgAA4jKcclCump/X9Dqkmu4zfkdCMb2z0SDXbo1kwLu60jW+QOitjKDc871QlfABhztdPsRJ2FFRgyxmalSdAAA=",
  },
  {
    slug: "capsicum-harvest",
    src: "/field/capsicum-harvest.webp",
    width: 1600,
    height: 720,
    alt: "Green capsicum peppers laid out on a sack to dry with a basin of tomatoes alongside",
    caption: "A harvest of capsicum and tomatoes sorted after picking.",
    tags: ["horticulture", "harvest"],
    blurDataURL:
      "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAAAQBACdASoUAAkAPulgqE0pJaQiMAgBIB0JQA7gBk8ztaFiy8GaNNpcAAD+wG8OB02HBh45qgheIQcAb4jN/W+HAlMStmLh2WWnH7p/RlKIDL+lS3vTprB07rJCmZ69yG4GCPse/6Ov2R7dqEACP5boAAA=",
  },
  {
    slug: "capsicum-in-hand",
    src: "/field/capsicum-in-hand.webp",
    width: 720,
    height: 1600,
    alt: "A hand holding a single large green capsicum in front of open grassland",
    caption: "Capsicum grown on a smallholder plot.",
    tags: ["horticulture", "harvest"],
    blurDataURL:
      "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAADQAwCdASoJABQAPulgqE0pJaQiMAgBIB0JQBAAAOMxwKEDpv9ZjAAA/urIe03KiO5Vzp5pORw7WDh7THnPHytI8RcNH4JaGnPj+FBh2XjNdYr6qYn6Dlg4fReJYUBnF3CR/VsTYsoPRcBwm4AAAA==",
  },
  {
    slug: "kale-seedling-rows",
    src: "/field/kale-seedling-rows.webp",
    width: 1600,
    height: 720,
    alt: "Neat rows of young kale seedlings in dark soil behind a wire fence",
    caption: "Kale seedlings established after transplanting.",
    tags: ["horticulture", "crop"],
    blurDataURL:
      "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAADwAwCdASoUAAkAPulgqE0pJaOiMAgBIB0JYwC06CKxdAK0m/JT4M4AAP6/rHbUm0mwmmi6wXFH2pjKmF1qFpN2sP7OYjxD+8ZTZUh6pgT59kp4TIcTxCb7isKUCcAA",
  },
  {
    slug: "kale-field",
    src: "/field/kale-field.webp",
    width: 1386,
    height: 1600,
    alt: "A dense field of mature kale plants in rows",
    caption: "Kale approaching harvest.",
    tags: ["horticulture", "crop"],
    blurDataURL:
      "data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAAAwBACdASoRABQAPulorFApJaQiqAqpIB0JYwDHFJlAY/lhw4xQnS1jcAAA8i2azPqAxW6/jek/s7JESh0bsut5YwSMzFrXbaeYl1mD+o93Mp7lvCswCsdriQnAa1WZz49hSCs8Fb5l9FJHHqWinrAaIX9DV5TrVtsF8ohU9nEb8RTB+zQAAA==",
  },
  {
    slug: "leafy-greens",
    src: "/field/leafy-greens.webp",
    width: 1600,
    height: 720,
    alt: "A close view of dense leafy greens growing in rows with a person working behind",
    caption: "Leafy vegetables under cultivation.",
    tags: ["horticulture", "crop"],
    blurDataURL:
      "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAACwAwCdASoUAAkAPulep00pJSOiMAgBIB0JZgBTAAeOsJo3ASE2AAD91TuZsY+xvBlmU2Q9pOsd+Uvc3WTlcm7lolKh/8O9BDYeYcrpykolG4jMhrVy3JGQQdCoBnMAJijJJGQwp7BNC4yyE1KQAA==",
  },
  {
    slug: "nursery-beds",
    src: "/field/nursery-beds.webp",
    width: 1600,
    height: 720,
    alt: "A person tending labelled seedbeds of young vegetable seedlings",
    caption: "Tending labelled nursery beds where seedlings are raised before transplanting.",
    tags: ["horticulture", "training"],
    blurDataURL:
      "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADQAwCdASoUAAkAPulgqE2pJaQiMAgBIB0JZQCsAB4/n29fAfU2YAAA/NbJqq8FxqRSKwBLDUpei3NzqDy+2CGR/o75QIVWtKV3nXwM8JxhgSTQAAA=",
  },
  {
    slug: "kitchen-garden",
    src: "/field/kitchen-garden.webp",
    width: 1600,
    height: 720,
    alt: "A woman seated beside a household vegetable garden of spinach and kale",
    caption: "A household vegetable garden — food for the table and a first income stream from the same plot.",
    tags: ["horticulture", "household", "women"],
    blurDataURL:
      "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAACQAwCdASoUAAkAPulgqE0pJaQiMAgBIB0JZgCdABbnejix5+/AANy1uLzebGzkdDMYORB2099qXjAv92Qi/dvGznHrhbXDURuiblRqoIzeBwc/FtFmUxy9edJVgaRIUCSiAogAAAA=",
  },
  {
    slug: "prepared-plot",
    src: "/field/prepared-plot.webp",
    width: 720,
    height: 1600,
    alt: "A mulched and prepared growing plot beside a homestead lawn",
    caption: "A mulched plot prepared beside a homestead.",
    tags: ["horticulture", "household"],
    blurDataURL:
      "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAADwAwCdASoJABQAPulep00pJSOiMAgBIB0JQBOl6gA0bEE/ZTllTdRoAP51kyh7rcHqJ22k3xxvMDB5DbN2VEPTZgcB3M7ePwmmGm9DqI/eNB3+sqfltmintm1liN0eYAA=",
  },
  {
    slug: "poultry-brooder",
    src: "/field/poultry-brooder.webp",
    width: 1600,
    height: 720,
    alt: "Dozens of young chicks in a brooder house with feeders and drinkers laid out in rows",
    caption: "Chicks in a brooder house with feeders and drinkers set out for the first weeks.",
    tags: ["poultry", "livestock"],
    blurDataURL:
      "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAADwAwCdASoUAAkAPulgqE0pJaOiMAgBIB0JYwCdMoADY9Y/XrW5MGyAAM34OlS368vc/j6fuNskyTZEJJ0kSJsfTW4O5eubpRmqtnlvFe7RNop3FwNlC381JXDoze1wAqNLwAAA",
  },
  {
    slug: "chicks-with-feed",
    src: "/field/chicks-with-feed.webp",
    width: 720,
    height: 1600,
    alt: "Chicks in a wire transport crate beside a sack of chick and duckling mash",
    caption: "Chicks arriving with starter feed at the beginning of a production cycle.",
    tags: ["poultry", "livestock"],
    blurDataURL:
      "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADwAwCdASoJABQAPulgqE0pJaOiMAgBIB0JYgCdMoACsi9CEG98p5fAAP6RsmuXlvN00ajrGstw+JnC7Yq23+jTnQwXp7MVXdMHH5bb43krSFYDEpfnghRvKAAAAA==",
  },
  {
    slug: "partner-meeting",
    src: "/field/partner-meeting.webp",
    width: 1600,
    height: 720,
    alt: "Several people seated around a boardroom table in discussion",
    caption: "A working session with local partners and stakeholders.",
    tags: ["meeting", "partnership"],
    blurDataURL:
      "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAADQAwCdASoUAAkAPuleqE0pJSQiMAgBIB0JYwDCgBLqe6zhMr5tvgAA/md/KGd6KIwtXkfON3shTqG6YXVGpJH7afD9n/0pySDvD8GD+8FsC6OqeVHjXP3aGMRbJNPsAAA=",
  },
  {
    slug: "training-session",
    src: "/field/training-session.webp",
    width: 1600,
    height: 720,
    alt: "A man addressing a seated group in a meeting hall",
    caption: "A training and mobilisation session with a farming group.",
    tags: ["training", "meeting"],
    blurDataURL:
      "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAADQAwCdASoUAAkAPuleqE0pJSQiMAgBIB0JZQC7ABk54nQYZ9wJ8AAAzjrSEbcx3fg3VRiw1bPTC1117Xe+3wWkdBASZKfXPf1xZWsufQjPNrajNXJUi4EhUB/9BZcxNIX6RuXxTItyZAAA",
  },
];

const bySlug = new Map(photos.map((photo) => [photo.slug, photo]));

/** Look up a photo by slug. Throws at build time if a slug is mistyped. */
export function photo(slug: string): Photo {
  const found = bySlug.get(slug);
  if (!found) throw new Error(`Unknown photo slug: ${slug}`);
  return found;
}

export function photoSet(...slugs: string[]): Photo[] {
  return slugs.map(photo);
}

export function photosByTag(tag: string): Photo[] {
  return photos.filter((item) => item.tags.includes(tag));
}

export const isLandscape = (item: Photo) => item.width >= item.height;
