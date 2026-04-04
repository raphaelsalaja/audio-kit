import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Helmet({
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
          d="M16.221 7.68699C15.936 3.92699 12.867 1.02399 9.02199 0.998993H8.97799C5.13399 1.02399 2.06399 3.92699 1.77899 7.68699L1.30799 13.071C1.24899 13.735 1.58399 14.377 2.15499 14.704L5.86899 16.896C6.09999 17.033 6.38899 17.035 6.62199 16.901C6.85499 16.768 6.99999 16.519 6.99999 16.25V10.911C6.99999 10.583 6.78699 10.293 6.47399 10.195L4.34999 9.52999C4.14199 9.46499 3.99999 9.27199 3.99999 9.05399V7.75499C3.99999 7.43399 4.29799 7.19699 4.61099 7.26899L8.41599 8.14299C8.60899 8.18499 8.80499 8.20599 8.99999 8.20599C9.19499 8.20599 9.39099 8.18499 9.58399 8.14299L13.389 7.26899C13.702 7.19699 14 7.43499 14 7.75499V9.05399C14 9.27199 13.858 9.46499 13.65 9.52999L11.526 10.195C11.213 10.293 11 10.583 11 10.911V16.25C11 16.519 11.145 16.768 11.378 16.901C11.611 17.035 11.899 17.032 12.131 16.896L15.845 14.704C16.415 14.377 16.75 13.735 16.692 13.071L16.221 7.68699Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Helmet;
