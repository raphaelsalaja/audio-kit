import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBackward({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M11 18.5V16L14.3314 14.3897V13.6698L11.5 12L22 7V9.5L14.5 13.5V17L11.5 18.5H11Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M8.00122 10.25L17.8304 5.33541C18.2527 5.12426 18.7497 5.12426 19.172 5.33541L21.4484 6.4736C21.7872 6.64299 22.0012 6.98926 22.0012 7.36804L22.0012 9.13361C22.0012 9.51152 21.7881 9.85715 21.4505 10.027L14.2546 13.6462"
          stroke={fill}
        />
        <path d="M22.0013 6.75009L12.2126 11.6439" stroke={fill} />
        <path
          d="M2 16H10.6459C10.8788 16 11.1084 15.9458 11.3167 15.8416L14.4208 14.2896"
          stroke={fill}
        />
        <path
          d="M13.9379 10.7813L11.6974 11.9015C11.5131 11.9936 11.5131 12.2566 11.6974 12.3487L14.5 13.75V16.382C14.5 16.7607 14.286 17.107 13.9472 17.2764L11.8167 18.3416C11.6084 18.4458 11.3788 18.5 11.1459 18.5H2.5C2.22386 18.5 2 18.2761 2 18V11.118C2 10.7393 2.214 10.393 2.55279 10.2236L4.55279 9.22361C4.83431 9.08285 5.16569 9.08285 5.44721 9.22361L7.53562 10.2678C7.6765 10.3383 7.84232 10.3382 7.98315 10.2677L10.2772 9.11864"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowBackward;
