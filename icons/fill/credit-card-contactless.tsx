import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardContactless({
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
          d="M17,4.75c0-1.517-1.233-2.75-2.75-2.75H3.75c-1.517,0-2.75,1.233-2.75,2.75v.75H17v-.75Z"
          fill={fill}
        />
        <path
          d="M10,13c0-1.091,.781-2.001,1.813-2.206,.083-.423,.287-.826,.614-1.153,.319-.32,.718-.531,1.151-.616,.085-.434,.297-.833,.616-1.152,.153-.153,.329-.272,.514-.374H1v4.75c0,1.517,1.233,2.75,2.75,2.75h7.49c-.732-.371-1.24-1.124-1.24-2Zm-2.75-1h-3c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h3c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M14.018,15.518c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061,.331-.331,.513-.77,.513-1.237s-.182-.907-.513-1.237c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0c.614,.614,.952,1.43,.952,2.298s-.338,1.684-.952,2.298c-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M15.785,17.286c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061,.803-.803,1.245-1.87,1.245-3.005s-.442-2.203-1.245-3.005c-.293-.292-.293-.768,0-1.061s.768-.293,1.061,0c1.086,1.085,1.685,2.53,1.685,4.066s-.599,2.98-1.685,4.066c-.146,.146-.339,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <circle cx="12.25" cy="13" fill={secondaryfill} r=".75" />
      </g>
    </svg>
  );
}

export default CreditCardContactless;
