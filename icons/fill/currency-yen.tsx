import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CurrencyYen({
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
          d="M12.25,13H5.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h6.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M12.25,10.5H5.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h6.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M12.866,2.096c-.359-.203-.817-.074-1.021,.288l-2.846,5.082L6.154,2.384c-.202-.362-.66-.491-1.021-.288-.361,.202-.49,.659-.288,1.021l3.404,6.08v5.804c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-5.805l3.404-6.079c.202-.361,.073-.818-.288-1.021Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CurrencyYen;
