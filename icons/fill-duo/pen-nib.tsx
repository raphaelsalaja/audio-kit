import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenNib({
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
          d="M7.75217 1.65266V1.65266C7.92243 1.39757 8.25 1.56725 8.25 1.87394V7.91243C8.25 8.09088 8.15037 8.25102 8.01576 8.36818C7.69978 8.64322 7.5 9.04835 7.5 9.5C7.5 10.3282 8.17179 11 9 11C9.82821 11 10.5 10.3282 10.5 9.5C10.5 9.04835 10.3002 8.64322 9.98424 8.36818C9.84963 8.25102 9.75 8.09088 9.75 7.91243V1.87381C9.75 1.56718 10.0775 1.39752 10.2477 1.65255V1.65255L14.8137 8.49147C15.1514 8.99717 15.2024 9.64268 14.9483 10.1946L12.7062 15.0627L5.29479 15.0637L3.05234 10.1948C2.79897 9.6426 2.8494 8.99859 3.18717 8.49266L7.75217 1.65266Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M3 15.75C3 14.7838 3.78379 14 4.75 14H13.25C14.2162 14 15 14.7838 15 15.75V16.25C15 16.6642 14.6642 17 14.25 17H3.75C3.33579 17 3 16.6642 3 16.25V15.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PenNib;
