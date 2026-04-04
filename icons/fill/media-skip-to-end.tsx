import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaSkipToEnd({
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
          d="M14.898,7.932l-6.011-3.628c-.384-.231-.861-.238-1.252-.019-.393,.222-.636,.64-.636,1.092v2.012L1.888,4.304c-.384-.231-.861-.238-1.252-.019-.393,.222-.636,.64-.636,1.092v7.246c0,.451,.243,.868,.635,1.089,.19,.107,.401,.161,.612,.161,.224,0,.446-.06,.645-.179l5.108-3.083v2.012c0,.451,.243,.868,.635,1.089,.19,.107,.401,.161,.612,.161,.224,0,.446-.06,.645-.179l6.003-3.623c.379-.229,.605-.63,.605-1.072s-.225-.839-.602-1.067Z"
          fill={fill}
        />
        <path
          d="M17.25,3.5c-.414,0-.75,.336-.75,.75V13.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V4.25c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default MediaSkipToEnd;
