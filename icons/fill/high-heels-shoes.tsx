import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HighHeelsShoes({
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
          d="M3.75,16c-.414,0-.75-.336-.75-.75v-5.286c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v5.286c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25,11.5c-.385,0-.747-.088-1.047-.254-3.475-1.927-6.667-5.232-8.537-8.841-.185-.356-.617-.504-.98-.335-1.581,.73-2.686,2.552-2.686,4.431,0,1.69,.909,3.266,2.373,4.113,.091,.052,.192,.085,.297,.096,.941,.102,1.84,.356,2.671,.758,1.793,.866,2.902,2.245,3.518,3.25,.485,.791,1.376,1.282,2.325,1.282h3.566c.689,0,1.25-.561,1.25-1.25v-.5c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HighHeelsShoes;
