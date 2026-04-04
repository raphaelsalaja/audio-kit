import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardHeart({
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
          d="M1 5.75C1 4.232 2.2305 3 3.75 3H14.25C15.7695 3 17 4.232 17 5.75V6.5H1V5.75Z"
          fill={fill}
        />
        <path
          d="M8.5 11.7222C8.4926 9.7881 10.2854 8.2685 12.1777 8.1V8H1V12.25C1 13.7681 2.2305 15 3.75 15H9.5507C8.94 14.0981 8.5 13.0078 8.5 11.7222ZM6.75 12H4.25C3.8358 12 3.5 11.6641 3.5 11.25C3.5 10.8359 3.8358 10.5 4.25 10.5H6.75C7.1642 10.5 7.5 10.8359 7.5 11.25C7.5 11.6641 7.1642 12 6.75 12Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.7311 16.6831C13.9009 16.7723 14.0992 16.7723 14.269 16.6831C15.1662 16.2116 18 14.5021 18 11.7224C18.0044 10.5016 17.0263 9.5074 15.8134 9.5C15.0837 9.5094 14.4054 9.88 14 10.4907C13.5946 9.88 12.9163 9.5094 12.1866 9.5C10.9737 9.5074 9.99561 10.5016 10 11.7224C10 14.5021 12.8339 16.2115 13.7311 16.6831Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CreditCardHeart;
