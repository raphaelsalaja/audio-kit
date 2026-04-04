import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ring({
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
          d="M2.75 9.75C2.75 6.29779 5.54779 3.5 9 3.5C12.4522 3.5 15.25 6.29779 15.25 9.75C15.25 13.2022 12.4522 16 9 16C5.54779 16 2.75 13.2022 2.75 9.75ZM9 5C6.37621 5 4.25 7.12621 4.25 9.75C4.25 12.3738 6.37621 14.5 9 14.5C11.6238 14.5 13.75 12.3738 13.75 9.75C13.75 7.12621 11.6238 5 9 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7.77696 -0.00100708C7.57006 -0.00100708 7.37234 0.0844689 7.2306 0.235197L6.2366 1.2922C5.98648 1.55818 5.96423 1.96562 6.1839 2.25725L8.03391 4.71324C8.06266 4.7514 8.09434 4.79526 8.12841 4.84242C8.17616 4.90851 8.22858 4.98109 8.28418 5.05356C8.51764 5.01829 8.75668 5 9 5C9.2433 5 9.48232 5.01828 9.71577 5.05355C9.77136 4.98108 9.82378 4.90851 9.87152 4.84243C9.90559 4.79526 9.93728 4.7514 9.96602 4.71324L11.816 2.25725C12.0357 1.96562 12.0135 1.55818 11.7633 1.2922L10.7693 0.235197C10.6276 0.0844688 10.4299 -0.00100708 10.223 -0.00100708H7.77696Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Ring;
