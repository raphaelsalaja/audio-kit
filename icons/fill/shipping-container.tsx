import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShippingContainer({
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
          d="M13.25,5.75c-.159,0-.319-.05-.455-.154l-3.794-2.901-3.794,2.901c-.328,.251-.799,.189-1.051-.14-.251-.329-.189-.8,.14-1.051L8.544,1.154c.269-.206,.643-.206,.911,0l4.25,3.25c.329,.251,.392,.722,.14,1.051-.147,.193-.371,.294-.596,.294Z"
          fill={secondaryfill}
        />
        <path
          d="M16.25,5c-.414,0-.75,.336-.75,.75v1.25H2.5v-1.25c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v7.5c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75V5.75c0-.414-.336-.75-.75-.75ZM6,13c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-3c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v3Zm3.75,0c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-3c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v3Zm3.75,0c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-3c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v3Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShippingContainer;
