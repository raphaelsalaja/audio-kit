import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoneyBill2({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M16.597,3.585c-2.559-1.335-4.997-1.34-7.907-.018-2.336,1.062-4.256,1.063-6.633-.002-.231-.104-.501-.083-.714,.055-.214,.138-.343,.375-.343,.629V13.75c0,.295,.174,.563,.443,.685,1.388,.622,2.669,.933,3.946,.933s2.552-.312,3.921-.935c2.514-1.143,4.423-1.15,6.593-.018,.231,.121,.511,.112,.735-.023,.225-.136,.361-.379,.361-.642V4.25c0-.279-.155-.536-.403-.665Zm-7.597,7.415c-1.105,0-2-.896-2-2s.895-2,2-2,2,.896,2,2-.895,2-2,2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MoneyBill2;
