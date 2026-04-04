import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Carousel({
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
          d="M10.75 2H7.25C5.731 2 4.5 3.231 4.5 4.75V13.25C4.5 14.769 5.731 16 7.25 16H10.75C12.269 16 13.5 14.769 13.5 13.25V4.75C13.5 3.231 12.269 2 10.75 2Z"
          fill={fill}
        />
        <path
          d="M2.2925 14.4214C2.2163 14.4214 2.1387 14.4097 2.0625 14.3853C1.1279 14.084 0.5 13.2261 0.5 12.25V5.75C0.5 4.7749 1.1274 3.917 2.062 3.6147C2.458 3.4902 2.8794 3.7041 3.0063 4.0981C3.1332 4.4921 2.9169 4.915 2.5229 5.0424C2.2099 5.1435 2 5.4277 2 5.7499V12.2499C2 12.5722 2.21001 12.8568 2.52251 12.9574C2.91701 13.0844 3.13329 13.5072 3.00639 13.9012C2.90389 14.2191 2.6094 14.4214 2.2925 14.4214Z"
          fill={secondaryfill}
        />
        <path
          d="M15.7075 14.4214C15.3906 14.4214 15.0962 14.2193 14.9936 13.9014C14.8666 13.5074 15.083 13.0845 15.4775 12.9576C15.79 12.857 16 12.5723 16 12.2501V5.7501C16 5.4278 15.79 5.1437 15.4771 5.0426C15.0831 4.9152 14.8667 4.49229 14.9937 4.09829C15.1211 3.70469 15.5435 3.4909 15.938 3.6149C16.8726 3.9171 17.5 4.7751 17.5 5.7502V12.2502C17.5 13.2263 16.8721 14.0842 15.9375 14.3855C15.8613 14.4099 15.7837 14.4214 15.7075 14.4214Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Carousel;
