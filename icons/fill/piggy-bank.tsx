import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PiggyBank({
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
          d="m13.75,9.5c-2.895,0-5.25-2.355-5.25-5.25,0-.692.142-1.351.387-1.956-.577.043-1.141.126-1.674.28-.238-.219-.507-.428-.832-.606-1.243-.681-2.443-.571-3.046-.447-.236.049-.434.208-.532.428-.098.22-.085.473.035.682l1.083,1.875c-.535.537-.979,1.148-1.302,1.818l-1.461.183c-.375.047-.657.366-.657.744v3.5c0,.3781.282.697.657.744l1.461.183c.43.892,1.072,1.681,1.862,2.324l.275,2.336c.044.378.364.663.745.663h1.75c.397,0,.726-.31.749-.706l.04-.675c.473.084.961.131,1.462.131s.989-.046,1.462-.131l.04.675c.023.396.352.706.749.706h1.75c.38,0,.7-.285.745-.663l.275-2.336c1.519-1.236,2.481-3.017,2.481-5.001,0-.213-.014-.422-.035-.63-.891.697-1.998,1.13-3.215,1.13l-.004-.001Zm-7.75-1.5c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m13.75.5c-2.068,0-3.75,1.682-3.75,3.75s1.682,3.75,3.75,3.75,3.75-1.682,3.75-3.75-1.682-3.75-3.75-3.75Zm.75,4.5c0,.414-.336.75-.75.75s-.75-.336-.75-.75v-1.5c0-.414.336-.75.75-.75s.75.336.75.75v1.5Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default PiggyBank;
