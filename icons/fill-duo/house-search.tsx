import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseSearch({
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
          d="M14 11C12.3428 11 11 12.3428 11 14C11 15.6572 12.3428 17 14 17C14.5565 17 15.0775 16.8486 15.5241 16.5847L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L16.5847 15.5241C16.8486 15.0775 17 14.5565 17 14C17 12.3428 15.6572 11 14 11ZM12.5 14C12.5 13.1712 13.1712 12.5 14 12.5C14.8288 12.5 15.5 13.1712 15.5 14C15.5 14.8288 14.8288 15.5 14 15.5C13.1712 15.5 12.5 14.8288 12.5 14Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.94127 1.36281C8.56694 0.887445 9.4333 0.886569 10.0591 1.36312L15.3088 5.35287C15.7448 5.68398 16 6.20008 16 6.746V9.96762C15.3975 9.66829 14.7185 9.5 14 9.5C11.5144 9.5 9.5 11.5144 9.5 14C9.5 15.1526 9.93315 16.2039 10.6456 17H4.75C3.23079 17 2 15.7692 2 14.25V6.746C2 6.19867 2.2559 5.68346 2.69155 5.3526L7.94127 1.36281Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default HouseSearch;
